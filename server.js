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

    console.log(JSON.stringify(result, null, 1));
});

app.listen(8000, function() {
    console.log('Example app listening on port 8000!')
})
