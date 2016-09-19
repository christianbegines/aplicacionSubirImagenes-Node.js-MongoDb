/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//variables para llamar a http, y a fileSystem

var http=require("http");
var fs=require("fs");
    
//crea el servidor
http.createServer(function(request,response){
    fs.readFile("./index.html",function(error,html){
        //variable para preprocesar el string
        var html_string=html.toString();
        
        //Expresion regular que busca en el HTML donde haya{x}
        var variables=html_string.match(/[^\{\}]+(?=\})/g);       
       
        var nombre="Chavo";
        //variable['nombre']
        //recorre el array de variables
        for (var i = variables.length-1; i>=0 ; i--) {
            var value=eval(variables[i]);           
            html_string=html_string.replace("{"+variables[i]+"}",value);            
        }
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(html_string);
        response.end();
    });    
}).listen(8080);




