var express = require("express");
var bodyParser=require("body-parser");
var User=require("./models/users").User;

var app=express();

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
	var user = new User({email: request.body.email, password: request.body.password,
		password_confirmation: request.body.password_confirmation
	});
	console.log(user.password_confirmation);
	user.save(function(err){
		if(err){
			console.log(String(err));
		}
		response.send("Guardamos tus datos");
	});
		
	
	
});

app.listen(8080);