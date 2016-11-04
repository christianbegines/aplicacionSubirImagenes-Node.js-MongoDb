var express = require("express");
var expressValidator=require("express-validator");
var	bodyParser=require("body-parser");
var  User=require("./models/users").User;
var  cookieSession=require("cookie-session");
var  api_imagenes=require("./api_imagenes");
var  session_middleware=require("./middlewares/session");

var app=express();
app.use(expressValidator());
//para utilizar el middleware de built-in
app.use("/public",express.static('public'));
app.use(bodyParser.json());//para peticiones tipo json
app.use(bodyParser.urlencoded({extended:true}));//para parsear urls
app.use(cookieSession({
	name:"session",
	keys:["llave-1","llave-2"]
}));

//añade el jade
app.set("view engine","jade");

//recoge las peticiones de servidor
app.get("/",function(request,response){
	console.log(request.session.user_id);
	response.render("index");
});
app.get("/signup",function(request,response){
	User.find(function(err,doc){
		console.log(doc);
		response.render("signup");

	});

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
	request.assert('email','El campo email es requerido').notEmpty();
	request.assert('password','El campo password es requerido').notEmpty();

	var errors=request.validationErrors();
	if(!errors){
		User.findOne({email:request.body.email,password:request.body.password},function(err,user
			){
					request.session.user_id=user._id;
					response.redirect("/app");
			})
	}else{

		response.sendStatus(500);
	}

});
app.use("/app",session_middleware);
app.use("/app",api_imagenes);
app.listen(8080);
