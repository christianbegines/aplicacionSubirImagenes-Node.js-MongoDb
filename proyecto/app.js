var express = require("express");
var bodyParser=require("body-parser");
var User=require("./models/users").User;
var app=express();
//para utilizar el middleware de built-in
app.use("/public",express.static('public')); 
app.use(bodyParser.json());//para peticiones tipo json
app.use(bodyParser.urlencoded({extended:true}));//para parsear urls
//añade el jade
app.set("view engine","jade");

//recoge las peticiones de servidor
app.get("/",function(request,response){
	response.render("index");
});
app.get("/signup",function(request,response){
	User.find(function(err,doc){
		console.log(doc);
		response.render("signup");
	})	
});

app.get("/login",function(request,response){
	response.render("login");	
});

//devuelven las correspondientes paginas con su funcion
app.post("/users",function(request,response){
	var user = new User({
						email:request.body.email, 
						password:request.body.password,
						password_confirmation:request.body.password_confirmation,
						username:request.body.username
	});
	user.save().then(function(us){
		response.send("guardamos sus datos exitosamente");
	},function(err){		
			console.log(String(err));
			response.send("No pudimos guardar la informacion");		  
	});	
});

app.post("/sessions",function(request,response){	
	User.findOne({email:request.body.email,password:request.body.password},function(err,docs
		){
		console.log(docs);
		response.send("Hola Chavo");

		})
});

app.listen(8080);
