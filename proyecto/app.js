var express = require("express");
var app=express();
app.set("view engine","jade");
app.get("/",function(require,response){
	response.render("index");
});
app.get("/login",function(require,response){
	response.render("login");
});

app.listen(8080);