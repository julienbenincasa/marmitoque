const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

const PORT = process.env.PORT || 5000 // this is very important

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT)
})
