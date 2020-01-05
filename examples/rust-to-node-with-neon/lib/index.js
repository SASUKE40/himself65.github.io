const addon = require('../native')
const assert = require('assert')

assert.ok(addon.add(1, 2) === 3)
console.log(addon.add(1, 2))