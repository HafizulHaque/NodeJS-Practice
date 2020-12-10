var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

// USER - email, name
var userSchema = new mongoose.Schema({
	email:String,
	name:String
});
var User = mongoose.model('User', userSchema);

// POST - title content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model('Post', postSchema);