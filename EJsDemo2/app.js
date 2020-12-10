var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/lovefor/:thing', function(req, res){
	var thing = req.params.thing;
	res.render('love', {lovingThing: thing});
});

app.get('/posts', function(req, res){
	var posts = [
		{title:'Adorable Pumsky', author:'Susy'},
		{title:'Beautiful Bunny', author:'Bunty'},
		{title:'Furious BullDog', author:'Kante'}
	];

	res.render('posts', {posts:posts});
});


app.get('*', function(req, res){
	res.send('you requested anonymous page...');
});

app.listen(3000, function(){
	console.log('app listening on port 3000');
});
