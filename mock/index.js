const express = require('express')
const app = express()

app.get(/\/api\/checkin/, require('./checkin'))
app.get(/\/api\/luogu\/captcha/, require('./luogu'))

app.listen(3001, function () {
  console.log('Mock load success on port 3001!')
})
