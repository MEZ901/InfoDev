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
      console.log(users)
      console.log(Object.keys(articles),"hello")
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send(`Error:${error.message}`);
    } 
   
  }
}

module.exports=ProfileController;