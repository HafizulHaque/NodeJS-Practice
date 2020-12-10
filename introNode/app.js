var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("hi there!!");
})

app.get('/bye', function(req, res){
	res.send("GOOD BYE BUDDY!");
})

app.get('*', function(req, res){
	res.send('Something else is requested');
})

app.listen(3000);
console.log('server is running at port 3000');