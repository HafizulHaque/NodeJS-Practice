var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name:String,
	age:Number,
	temperment:String
});

var Cat = mongoose.model("Cat", catSchema);

// adding cat to database
var george = new Cat({
	name:"Pol",
	age: 21,
	temperment: "Evil"
});

// method o1
//===============
// george.save(function(err, cat){
// 	if(err){
// 		console.log("something went wrong");
// 	}
// 	else{
// 		console.log('saved successfully');
// 		console.log(cat);
// 	}
// });

// method 02
//==================
Cat.create({
	name:"Snow white",
	age:15,
	temperment: "very good"
}, function(err, cat){
	if(err){
		console.log(err);
	}else{
		console.log(cat);
	}
});

// retriving cats form databse and log to console

Cat.find({}, function(err, cats){
	if(err){
		console.log("error finding cat");
		console.log(err);
	}
	else{
		console.log("all the cats");
		console.log(cats); 
	}
});
