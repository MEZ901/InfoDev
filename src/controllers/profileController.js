const { PrismaClient } = require("@prisma/client");

const prisma= new PrismaClient;

class ProfileController{
  static async profile(req, res) {
    console.log('first')
    try {
      // Use Prisma to fetch user data (replace with your specific query)
      const users = await prisma.user.findMany();
      // Pass the fetched data to the view
      res.render('profile', { users });
      console.log(users)
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send(`Internal Server Error:${error.message}`);
    } 
    console.log("here")
  }
}

module.exports=ProfileController;