const { PrismaClient } = require("@prisma/client");

const prisma= new PrismaClient;

class ProfileController{
  static async profile(req, res) {
    
    try {
      const userId=req.query.id
      const userIdInt = parseInt(userId);
      
      const users = await prisma.user.findUnique({ where: { id: userIdInt } });;
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
      
      // const  {name,bio}=  req.body
      console.log( req.body);
              // console.log(name,'hh',bio,'gg');
              res.redirect('/profile?id=' + 3);
          }catch(error){
          console.error("Error:",error)
          res.status(500).send(`Error:${error.message}`);
          }
  }
}

module.exports=ProfileController;