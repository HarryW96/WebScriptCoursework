var express = require('express')
var app = express()

app.use(express.static('static'))

app.listen(8000, function() {
    console.log('Magic happening on port 8000!')
})
