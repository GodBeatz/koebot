var express = require('express');
var app = express();
var bot = require('./bot.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.send('Koe: Hello Nya!');
});

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});