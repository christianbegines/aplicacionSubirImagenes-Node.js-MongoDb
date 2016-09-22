var mongoose = require("mongoose");
var mpromise=require("mpromise");
mongoose.Promise= global.Promise;
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/fotos");

var user_schema= new Schema({
	name: String,
	username:String,
	password:String,
	age:Number,
	email:String,
	birthDate:Date
});
user_schema.virtual("password_confirmation").get(function(){
	return this.password_c;
}).set(function(password) {
	this.password_c=password;
});

var User = mongoose.model("User",user_schema);

module.exports.User=User;
