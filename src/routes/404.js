
const found=(app)=>{
  app.get('/notFound',(req,res)=>{
    res.render('404');
    })
}
module.exports={found};
