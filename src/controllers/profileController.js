class profileController{
  static profile = (req,res,next)=>{
      res.render("profile",{title:"youssef"})
  }
}

module.exports=profileController;