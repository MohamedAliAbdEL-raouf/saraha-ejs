const mesgModel = require('../models/message.models');
module.exports.Message =async (req,res)=>{
    let messages = await mesgModel.find({userId:req.session.userId});
    console.log(req.session);
    var fullUrl = req.protocol + "://" + req.get("host");
    if(req.session.isLoggedIn){
        res.render('message.ejs',{
            name:req.session.name,
            isLoggedIn:req.session.isLoggedIn,
            userId:req.session.userId,
            messages,
            fullUrl,
        });
      
    }else{
        res.redirect("/logIn")
    };
};

module.exports.handleMessage = async (req,res)=>{
    await mesgModel.insertMany({message:req.body.message,userId:req.params.id});
    res.redirect("/user/"+req.params.id);
};