var express=require("express");
var router=express.Router();

router.get("/",function(require,response){
/*Buscar  usuario*/
  response.render("app/home")
});

module.exports=router;
