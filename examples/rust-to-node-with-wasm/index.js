const wasm = require('./pkg/rust_to_node_with_wasm_bg')
const assert = require('assert')

assert.ok(wasm.add(1, 2) === 3)
console.log(wasm.add(1, 2))