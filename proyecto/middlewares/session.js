var User = require("../models/users").User;
module.exports=function(request,response,next){
  if(!request.session.user_id){
    response.redirect("/login")
  }else{
    User.findById(request.session.user_id,function(err,user){
      if(err){
        console.log(err);
        response.redirect("/login");
      }else{
        response.locals={user:user};
        next();
      }
    });

  }
}
