var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send('Hi there, welcome to my assignment');
});
app.get('/speak/:animalName', function(req, res){
	var word = {
		cow: 'Moo',
		pig: 'Oink',
		dog: 'Woof Woof'
	};
	res.send(`The ${req.params.animalName} says '${word[req.params.animalName]}'`);
});
app.get('/repeat/:word/:count', function(req, res){
	var ans = '';
	var cnt = Number(req.params.count);
	while(cnt > 0){
		ans += `${req.params.word} `;
		cnt--;
	}
	res.send(ans);
});
app.get('*', function(req, res){
	res.send('sorry page not found! what are you doing with your life?');
})

app.listen(3000);

console.log('app listening on port 3000');