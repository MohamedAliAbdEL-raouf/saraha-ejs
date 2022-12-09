const userModel = require("../models/user.models")

module.exports.Regester = (req,res)=>{
    res.render('regester.ejs',{isLoggedIn:req.session.isLoggedIn , info:req.flash('info')})
};

module.exports.handleRegester=async(req,res)=>{
    console.log(req.body);
    await userModel.insertMany(req.body);
    res.redirect("/logIn")
};