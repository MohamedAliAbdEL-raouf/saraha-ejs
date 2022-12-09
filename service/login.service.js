const userModel = require('../models/user.models')
module.exports.Login = (req,res)=>{
    res.render('login.ejs')
}

module.exports.handleLogin=async (req,res)=>{
    const {email,password}=req.body;
    let user=await userModel.findOne({email})
    if(user){
        if(user.password == password){
            req.session.userId = user._id
            req.session.name = user.name;
            req.session.isLoggedIn = true;
            res.redirect("/mesg")
        }else{
            res.redirect('/logIn')
        }
    }else{
        res.redirect('/logIn')
    }

};