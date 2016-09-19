/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http=require("http"),
    fs=require("fs");
    
    
    

    
http.createServer(function(request,response){
    fs.readFile("./index.html",function(error,html){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(JSON.stringify({nombre: "Uriel", username:"uriel"}));
        response.end();
    });    
}).listen(8080);


