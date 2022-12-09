
const Joi = require('joi');
const schema = Joi.object({
    name:Joi.string().min(3).max(20).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp("^[a-zA-z0-9]{3,30}$")),
    repassword:Joi.ref('password'),
});

module.exports.validation=(req,res,next)=>{
 let {error} =  schema.validate(req.body,{abortEarly:false});

 if(!error){
   next() 
 }else{
    console.log(error.details);
    req.flash('info', error.details);
    res.redirect('/regs')
 }
};
