---
title: 各种方法用Rust给Node写扩展
tags: code
date: 2020-01-05
---

# 各种方法用Rust给Node写扩展

> 笔者尝试了各种方法用Rust给Node.js写插件，本文将介绍四种方法给Node.js写拓展

代码样例请到 [examples](https://github.com/Himself65/himself65.github.io/tree/master/examples)

## 背景

最近学Rust，看到了ry的项目 [rusty-v8](https://github.com/denoland/rusty_v8)，本来想试着用整到 `node.js` 上面，然而发现这个项目在 `build` 时候已经链接好了 `v8`，所以看起来只能和 `Deno` 写。于是我顺便尝试了其他方法给 `node.js` 写扩展

## 环境

- `Ubuntu 18.04.3 LTS`

- `Node.js v13.x`

- `rustc 1.40.0 (73528e339 2019-12-16)`

其他依赖可在 `example` 中具体查看

> 以下代码在 `Ubuntu WSL` 中运行，因为 `Windows` 环境下编译 `v8` 相关代码有些麻烦

## FFI

首先我们可以考虑将Rust先编译到链接库

```toml
[package]
name = "node-rs"
version = "0.1.0"
authors = ["himself65 <himself65@outlook.com>"]
edition = "2018"

[lib]
name = "int_add"
crate-type = ["staticlib"]
```

```rust
#[no_mangle]
pub extern fn method(a: i32, b: i32) -> i32 {
    a + b
}
```

`#[no_mange]` 关闭名称修饰，就好比 `Vue` 的 `css scoped` 一样，不然符号表找不到函数。

然后在头文件中声名一下函数

```c++
#ifndef NODE_RS_LIB_H
#define NODE_RS_LIB_H

#include <v8.h>
#include <node.h>

#ifdef __cplusplus
extern "C"{
#endif

int method(int a, int b);

#ifdef __cplusplus
}
#endif
#endif //NODE_RS_LIB_H
```

绑定到 `Node.js module` 中

```cpp
#include "./lib.h"

namespace example {
	using namespace v8;

	void Method(const FunctionCallbackInfo<Value>& args) {
		Isolate* isolate = args.GetIsolate();

		if (args.Length() < 2 || !args[0]->IsNumber() || !args[1]->IsNumber()) {
			isolate->ThrowException(Exception::TypeError(
				String::NewFromUtf8(isolate, "Error: Two Numbers expected").ToLocalChecked()));
			return;
		}

		Local<Context> context = isolate->GetCurrentContext();
		Local<Number> num1 = args[0]->ToNumber(context).ToLocalChecked();
		Local<Number> num2 = args[1]->ToNumber(context).ToLocalChecked();
		int ans = method(num1->Int32Value(context).ToChecked(), num2->Int32Value(context).ToChecked());
		args.GetReturnValue()
			.Set(Number::New(isolate, ans));
	}

	void Initialize(Local<Object> exports) {
		NODE_SET_METHOD(exports, "add", Method);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}
```

然后`node-gyp`配置文件书写一下，注意这里 `libraries` 是写死的，如果要动态判断自己翻阅文档 [Skeleton of a typical Chromium .gyp file](https://gyp.gsrc.io/docs/UserDocumentation.md)

```
{
    "targets": [
        {
            "target_name": "example",
            "sources": [
                "src/main.cpp"
            ],
            "libraries": [
                "../target/debug/libint_add.a"
            ]
        }
    ]
}
```

最后，就可以跑了

```js
const lib = require('../build/Release/example.node')
const assert = require('assert')

assert.ok(1 + 2 === lib.add(1, 2))
```

更多请参考 

- [Rust FFI](https://doc.rust-lang.org/nomicon/ffi.html#calling-rust-code-from-c)：其中介绍了FFI的详细资料

- [v8 docs](https://v8docs.nodesource.com/)：比较清晰的 `v8` 文档

- [Node.js：来一打 C++ 扩展](https://book.douban.com/subject/30247892)：比较优秀的 `node.js` 扩展教程

- [rust-ffi-examples](https://github.com/alexcrichton/rust-ffi-examples): 包含了所有 `Rust` 的 `FFI` 简单样例 

## Neon

[neon](https://github.com/neon-bindings/neon) 是一个用 `Rust` 写 `Node.js Addon` 很优秀的项目

我们直接可以通过 `CLI` 进行快速开发

```bash
neon new xxx
```

需要书写的代码更少，更方便

```rust
#[macro_use]
extern crate neon;

use neon::prelude::*;

fn add(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let arg0 = cx.argument::<JsNumber>(0)?.value();
    let arg1 = cx.argument::<JsNumber>(1)?.value();
    Ok(cx.number(arg0 + arg1))
}

register_module!(mut cx, {
    cx.export_function("add", add)
});
```

更多请参考

- [Neon](https://neon-bindings.com/)：官方文档

## WASM

`WASM` 目前为止已经 `1.0`版本，我们可放心大胆的开始写他了

我们直接按照教程说的来

```bash
cargo generate --git https://github.com/rustwasm/wasm-pack-template
```

```rust
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

```
wasm-pack build --target nodejs
```

而且打包出来后有完整的类型，十分方便

更多请参考

- [game-of-life](https://rustwasm.github.io/book/game-of-life/introduction.html)：一个官方Example

## Node-API FFI package

这个实际上就是 Rust to C++，然后 `node-gyp` 绑定，不过有了第三方项目简化了我们写 `binding.gyp` 的繁琐操作，这里我就不多介绍了。

更多请参考

- [node-ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi)：官方Git
