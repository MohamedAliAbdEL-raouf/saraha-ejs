module.exports.User = (req,res)=>{
    res.render('user.ejs',{isLoggedIn:false , userId:req.params.id});
}