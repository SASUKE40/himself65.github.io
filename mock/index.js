const express = require('express')
const app = express()

app.get(/\/api\/checkin/, require('./checkin'))
app.get(/^luogu\/login$/, require('./luogu'))

app.listen(3001, function () {
  console.log('Mock load success on port 3001!')
})
