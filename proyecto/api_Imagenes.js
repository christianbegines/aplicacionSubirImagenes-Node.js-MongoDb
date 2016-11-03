var express=require("express");
var Imagen=require("./models/imagenes");
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
      Imagen.findById(request.params.id,function(err,imagen){
        response.render("app/imagenes/show",{imagen:imagen});
      })


  })
  .put(function(request,response){

  })
  .delete(function(request,response){

  });
  router.route("/imagenes")
    .get(function(request,response){
        Imagen.find({},function(err,imagenes){
          if(err){
            response.redirect("/app");
            return;
          }
          response.render("app/imagenes/index",{imagenes:imagenes});
        });
    })
    .post(function(request,response){
      var data={
        title:request.body.title
      }

      var imagen= new Imagen(data);
      imagen.save(function(err){
        if(!err){
          response.redirect("/app/imagenes/"+imagen._id);
        }else{
          response.render(err);
        }
      })
    });


module.exports=router;
