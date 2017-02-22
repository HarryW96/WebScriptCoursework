var express = require('express')
var Weather = require('weather.js')
var app = express()


app.use(express.static('static'))

Weather.getCurrent("Kansas City", function(current) {
  console.log(
    ["currently:",current.temperature(),"and",current.conditions()].join(" ")
  );
});

app.listen(8000, function() {
    console.log('Magic happening on port 8000!')
})
