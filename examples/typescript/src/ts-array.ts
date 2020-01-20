type MyArray = string[] | { name: string } []

function f (array: MyArray) {
  // Error:(8, 9) TS2349: This expression is not callable.
  //   Each member of the union type '(<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: { name: string; }, index: number, array: { name: string; }[]) => U, thisArg?: any) => U[])' has signatures, but none of those signatures are compatible with each other.
  array.map(item => {
    // do something
  })
}

function g (array: MyArray) {
  if (typeof array[0] === 'string') {
    // Error:(17, 11) TS2349: This expression is not callable.
    //   Each member of the union type '(<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any) => U[]) | (<U>(callbackfn: (value: { name: string; }, index: number, array: { name: string; }[]) => U, thisArg?: any) => U[])' has signatures, but none of those signatures are compatible with each other.
    array.map(item => {
      // do something
    })
  }
}

const isStringArray = (arr: MyArray): arr is string[] => typeof arr[0] ===
  'string'

function h (array: MyArray) {
  if (isStringArray(array)) {
    // it works!
    array.map(item => {
      // do something
    })
  }
}

function j (array: MyArray) {
  if (typeof array[0] === 'string') {
    // it works too
    (array as string[]).map(item => {
      // do something
    })
  }
}
