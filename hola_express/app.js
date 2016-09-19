var express=require("express");

var app =express(); 
app.set("view engine","jade");
app.get("/",function(require,response){
    response.render("index",{hola:"Hola chavo"});
});

app.listen(8080);

