const {Schema,model,Types} = require('mongoose');

const messageSchema = Schema({
    message:String,
    userId:{
        type:Types.ObjectId,
        ref:"user",
    },
});

module.exports=model('message',messageSchema);