const { PrismaClient } = require("@prisma/client");
const { getImageBase64, hashPassword } = require("../helpers/functions");
// const getImageBase64= require()

const prisma= new PrismaClient;

class ProfileController{
  static async profile(req, res) {
    
    try {
      const userId=req.query.id
      const userIdInt = parseInt(userId);
      
      const users = await prisma.user.findUnique({ where: { id: userIdInt,isDeleted: false } });
      console.log(users)
      if(users==null){
        console.log("hello isssam")
       res.redirect("/notFound");
      }
      const articles= await prisma.article.findMany({where: { authorId: userIdInt  }});
      res.render('profile', { users ,articles});
      // console.log(users)
      // console.log(Object.keys(articles),"hello")
    } catch (error) {
      console.error('Error:', error);
      res.send(`Error:${error.message}`);
    } 
   
  }
  static async updateProfile(req,res){
    try{
      
      const  {id,name,bio,email,password,image}=  req.body
          // getImageBase64(image);
      console.log(id,name,bio,email,password,image);
            const idUserUpdate= parseInt(id);
            const data = {};
            if(name!=""){
                  data.name=name;
            } if(bio!=""){
                data.bio=bio;
            } if(image!=""){
                 data.photo=image;
            } if(password!=""){
                 const pass= await hashPassword(password);
                  data.password=pass;
            } if(email!=""){
                 data.email=email;
            }

            console.log(data,"hello");
             const updateUser=await prisma.user.update({where:{id:idUserUpdate},
            data:data})
          //  const y=   btoa(image);
              res.redirect('/profile?id=' + id);
          }catch(error){
          console.error("Error:",error)
          res.send(`Error:${error.message}`);
          }
  }
  static async delete(req,res){
    try{
            const  id =req.query.id;
            const idUser=parseInt(id);
            const deleteUser=await prisma.user.update({where:{id:idUser},data:{
              isDeleted : true
            }})
           res.redirect('/auth/register');
          }catch (error) {
            console.error('Error:', error);
            res.send(' Error');
          }
        }
  }
module.exports=ProfileController;