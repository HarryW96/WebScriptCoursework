var express = require('express')
var app = express()
var weather = require('weather-js')

app.use(express.static('static'))

app.listen(8000, function() {
    console.log('Magic happening on port 8000!')
})

