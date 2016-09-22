var express = require("express");
var bodyParser=require("body-parser");
var app=express();
var mongoose=require("mongoose");
var mpromise=require("mpromise");
var Schema=mongoose.Schema;

mongoose.Promise= global.Promise;


mongoose.connect("mongodb://localhost/fotos");

var userSchemaJSON = {
	email:String,
	password:String
};

var user_schema=new Schema(userSchemaJSON);
var User=mongoose.model("User",user_schema)



//para utilizar el middleware de built-in
app.use("/public",express.static('public')); 
app.use(bodyParser.json());//para peticiones tipo json
app.use(bodyParser.urlencoded({extended:true}));//para parsear urls
app.set("view engine","jade");


app.get("/",function(request,response){
	response.render("index");
});
app.get("/login",function(request,response){
	User.find(function(err,doc){
		console.log(doc);
		response.render("login");
	})
	
});

app.post("/users",function(request,response){
	var user = new User({email: request.body.email, password: request.body.password})
	user.save(function(){
		response.send("Guardamos tus datos");
	});
		
	
	
});

app.listen(8080);