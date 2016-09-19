var express=require("express");

var app =expres(); 
app.set("view engine","jade");
app.get("/",function(require,response){
    response.send("Hola mundo");
});

app.listen(8080);

