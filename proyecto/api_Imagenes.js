var express=require("express");
var router=express.Router();

router.get("/",function(require,response){
/*Buscar  usuario*/
  response.render("app/home")
});
/*REST*/
router.get("/imagenes/new",function(request,response){
    response.render("app/imagenes/new")
});
router.get("/imagenes/:id/edit",function(request,response){

});
router.route("/imagenes/:id")
  .get(function(request,response){

  })
  .put(function(request,response){

  })
  .delete(function(request,response){

  });
  router.route("/imagenes")
    .get(function(request,response){

    })
    .post(function(request,response){

    });


module.exports=router;
