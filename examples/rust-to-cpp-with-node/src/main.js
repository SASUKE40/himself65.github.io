const lib = require('../build/Release/example.node')
const assert = require('assert')

assert.ok(1 + 2 === lib.add(1, 2))
