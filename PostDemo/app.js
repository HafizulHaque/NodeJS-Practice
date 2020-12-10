var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

friends = ["John", "Rusho", "Kane", "Josh", "Susy"];


app.get("/", function(req, res){
	res.render("home");
});	

app.get("/friends", function(req, res){
	res.render("friends", {friends:friends});
});

app.post("/addfriend", function(req, res){
	friends.push(req.body.newfriend);
	res.redirect("/friends");
});

app.listen(3000, function(){
	console.log("server started at port 3000");
})