var mongoose = require("mongoose");
var mpromise=require("mpromise");
mongoose.Promise= global.Promise;
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/fotos");
var posibles_valores=["M","F"];
var email_match=[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Colocar un email"];
var password_validation={
	
			validator: function(p){
				return this.password_c == p;
			} ,
			message: "Las contraseñas no son iguales"
		
}


var user_schema= new Schema({
	name: String,
	username:{type:String,required:true,maxlength:[50,"Username muy grande"]},
	password:{
		type:String,
		minlength:[8,"El password es muy corto"],validate:password_validation},
	age: {type: Number,min:[5,"La Edad no puede ser menor que 5"],max:[100,"La edad no puede ser mayor de 100"]},
	email: {type: String,required:"El correo es obligatorio",match:email_match},
	birthDate:Date,
	sex:{type:String, enum:{values:posibles_valores,message:"Opcion no"}}
});

user_schema.virtual("password_confirmation").get(function(){
	return this.password_c;
}).set(function(password) {
	this.password_c=password;
});

var User = mongoose.model("User",user_schema);

module.exports.User=User;
