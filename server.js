var express = require('express')
var app = express()
var weather = require('weather-js')

app.use(express.static('static'))


weather.find({
    search: 'Portsmouth, UK',
    degreeType: 'C'
},

function(err, result) {
    if (err) console.log(err);

    console.log(JSON.stringify(result, null, 2));
});

app.listen(8000, function() {
    console.log('Magic happening on port 8000!')
})
