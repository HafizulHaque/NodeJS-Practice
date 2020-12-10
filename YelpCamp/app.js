var express 	= require('express'),
	app  		= express(),
	bodyParser 	= require('body-parser'),
	mongoose 	= require('mongoose');

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs'); 

// schema set up
var campgroundSchema = new mongoose.Schema({
	name:String,
	image:String,
	description:String
});
	
var Campground = mongoose.model("Campground", campgroundSchema);


// home route
app.get('/', function(req, res){
	res.render('home');
});
// show campgrounds route
app.get('/campgrounds', function(req, res){
	//retrieve data form database
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render('campgrounds', {campgrounds:allCampgrounds});
		}
	})
});
// post to /campgrounds route to make new item inserted
app.post('/campgrounds', function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var details = req.body.details;
	var newCamp = {name:name, image:image, description: details};
	//insert into database
	Campground.create(newCamp, function(err, newCamp){
		if(err){
			console.log("insertion into database failed");
		}else{
			console.log("successfully added to db");
			console.log(newCamp);
		}
	});
	//redirect to campground page
	res.redirect('/campgrounds');
});
// new campground form page route
app.get('/campgrounds/new', function(req, res){
	res.render('new.ejs');
});

// show details about a campground with specific id
app.get('/campgrounds/:id', function(req, res){
	var id = req.params.id;

	Campground.findById(id, function(err, campGround){
		if(err){
			console.log('error retriving item form database');
		}else{
			console.log('retrived successfully');
			res.render('show', {camp:campGround});
		}
	});
})





app.listen(3000, function(){
	console.log('YelpCamp Server has started!!');
});