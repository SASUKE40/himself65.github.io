---
title: Node.js 14.0.0 发布
tags: ["code", "nodejs", "news"]
date: "2020-04-21"
---

原文地址：https://medium.com/@nodejs/node-js-version-14-available-now-8170d384567e

> 下文是简单翻译

您可以在 [Node.js Download](https://nodejs.org/en/download/) 下载最新 `node.js`

1. 诊断报告 —— **Stable**

2. V8 升级到 `v8.1`

    其中值得注意的几大特性
    
    1. 支持 Optional Chaining
    2. 支持 Nullish Coalescing
    3. `Intl.DisplayNames`
    4. 为 `Intl.DateTimeFormat` 启用 `calendar` 和 `numberingSystem` 选项

3. 实验性的 `Async Local Storage` API

    用于跟踪 NodeJs 中的异步资源的生命周期。Node.js正在寻找可以试用此API的团队，并提供
    更多的反馈，您可以在[这里提交](https://github.com/nodejs/diagnostics/issues)一个
    标题为"Experience report with AsyncLocalStorage API"的issue。

4. Streams API更新

    提高了各种流的行为一致性。

    例如 `http.OutgoingMessage` 与 `stream.Writable` 
    和 `net.Socket` 的行为完全相同于 `stream.Duplex`

    再比如 `autoDestroy`选项现在默认设置为`true`，使流在结束后始终调用`_destroy`

5. 实验性的 `WASI` (Web Assembly System Interface)

    实现 https://wasi.dev/ 功能

    样例代码：

    ```js
    'use strict';
    const fs = require('fs');
    const { WASI } = require('wasi');
    const wasi = new WASI({
      args: process.argv,
      env: process.env,
      preopens: {
        '/sandbox': '/some/real/path/that/wasm/can/access'
      }
    });
    const importObject = { wasi_snapshot_preview1: wasi.wasiImport };
    
    (async () => {
      const wasm = await WebAssembly.compile(fs.readFileSync('./binary.wasm'));
      const instance = await WebAssembly.instantiate(wasm, importObject);
    
      wasi.start(instance);
    })();
    ```

6. 移除 ESM modules 警告
    
    在 `v13` 中，需要调用 `--experimental-modules` 来开启 `ESM module` 支持，
    而且还会有警告，但目前已经移除警告（还是需要手动开启）

    仍在实验中，但是其已经非常完善，移除警告迈向了stable的重要一步

7. 新的编译器和平台最小化

    对于 `node.js v14`

    将项目迁移至`XCode 11`，所以将 `macOS` 下的最低版本提高到了 `macOS 10.13 (High Sierra)`

    将 `linux`，最低 GCC 提高到了 `GCC6`，虽然发布的二进制版本采用 `GCC8` 进行编译

    同时，`node.js v14` 也继续不会在结束维护的 `Windows` 发行版下维护

