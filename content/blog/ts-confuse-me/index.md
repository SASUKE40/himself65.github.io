---
title: 最近TypeScript困惑我的地方
tags: ["code"]
date: "2020-01-20"
---

假定我们有一个数组类型

```ts
type MyArray = string[] | { name: string }[]
```

直接对这个类型进行 `map` 等操作是不对的。

```ts
function f (array: MyArray) {
  // Error:(8, 9) TS2349: This expression is not callable.
  //   Each member of the union type '(<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: { name: string; }, index: number, array: { name: string; }[]) => U, thisArg?: any) => U[])' has signatures, but none of those signatures are compatible with each other.
  array.map(item => {
    // do something
  })
}
```

因为我想象中它的类型是 `(<U>(callbackfn: (value: string | { name: string }, index: number, array: string[] | { name: string }[]) => U, thisArg?: any) => U[])`，然而并不是。

在不加 `ts-ignore` 情况下，我们可以判断一下第一个索引来确定类型吗？

No.

```ts
function g (array: MyArray) {
  if (typeof array[0] === 'string') {
    // Error:(17, 11) TS2349: This expression is not callable.
    //   Each member of the union type '(<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: { name: string; }, index: number, array: { name: string; }[]) => U, thisArg?: any) => U[])' has signatures, but none of those signatures are compatible with each other.
    array.map(item => {
      // do something
    })
  }
}
```

我所找到的唯一解决办法就是魔改返回值了，然后终于能正常跑了

```ts
const isStringArray = (arr: MyArray): arr is string[] => typeof arr[0] === 'string'

function h (array: MyArray) {
  if (isStringArray(array)) {
    // it works!
    array.map(item => {
      // do something
    })
  }
}
```

或者，`as xxx` 大法好

```ts
function j (array: MyArray) {
  if (typeof array[0] === 'string') {
    // it works too
    (array as string[]).map(item => {
      // do something
    })
  }
}
```

---

第二个是我困惑的就是 `if` 表达式的推断

```ts
let a: Array<{ name: string }>

if (true) {
    a = []
}

(() => {
    const b: any[] = a || [] 
})()
```

这样可以运行，因为 `a` 一定是 `any[]`

但是，下面这个做法并不行

```ts
let a: Array<{ name: string }>

if ((() => true)()) {
    a = []
}

(() => {
    const b: any[] = a || [] 
})()
```

所以看起来 `ts` 并不会预编译一次函数，所以才会出现 `return expression is Type` 这样的关键字吧。
