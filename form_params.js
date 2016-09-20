/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http=require("http");
var fs=require("fs");
var parser=require("./params_parser.js");


var render=require("./render_view.js");    
//crea el servidor
http.createServer(function(request,response){
     if(request.url.indexOf("favicon.ico")>0){
            return;
        }  
        //lee
    fs.readFile("./index.html",function(error,html){      
        var parametros=parser.parse(request);         
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(render.render(html,parametros));
        response.end();
    });    
}).listen(8080);

