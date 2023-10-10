const { PrismaClient } = require("@prisma/client");
const { getImageBase64 } = require("../helpers/functions");
// const getImageBase64= require()

const prisma= new PrismaClient;

class ProfileController{
  static async profile(req, res) {
    
    try {
      const userId=req.query.id
      const userIdInt = parseInt(userId);
      
      const users = await prisma.user.findUnique({ where: { id: userIdInt } });
      const articles= await prisma.article.findMany({where: { authorId: userIdInt  }});
      res.render('profile', { users ,articles});
      // console.log(users)
      // console.log(Object.keys(articles),"hello")
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send(`Error:${error.message}`);
    } 
   
  }
  static async updateProfile(req,res){
    try{
      
      const  {id,name,bio,image}=  req.body
          // getImageBase64(image);
      console.log(id,name,bio,image);
            const idUserUpdate= parseInt(id);
             const updateUser=await prisma.user.update({where:{id:idUserUpdate},data:{
              name:name,
              bio:bio
             }})
           const y=   btoa(image);
              res.redirect('/profile?id=' + 3);
          }catch(error){
          console.error("Error:",error)
          res.status(500).send(`Error:${error.message}`);
          }
  }
}

module.exports=ProfileController;