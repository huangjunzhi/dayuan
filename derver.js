var express = require('express')
var compression = require('compression')
var app = express()
app.use(compression())
app.use(express.static('./'))
  // var port = process.env.PORT || config.build.port
var port = 8085
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
