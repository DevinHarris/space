var express = require('express'),
	app = express(),
	path = require('path'),
	morgan = require('morgan'),
	port = process.env.PORT || 8080,
	events = require('events');


app.use(express.static(path.join(__dirname + '/public')));
app.set('appName', 'Space');
app.use(morgan('dev'));
app.use('*', function(req, res, next) {
	res.sendFile(path.join(__dirname + '/public/index.html'), function(err) {
		if (err) console.error(err);
		
	});

	next();
});


app.listen(port, function() {
	console.log(app.get('appName') + ' is running on port ' + port);
});

