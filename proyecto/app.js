var express = require("express");
var bodyParser=require("body-parser");
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
	
	response.render("login");
});

app.post("/users",function(request,response){
	console.log("Contraseña:"+ request.body.password);
	console.log("Email:"+ request.body.email);
	response.send("Recibimos tus datos");
});

app.listen(8080);