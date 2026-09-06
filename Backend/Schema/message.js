const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;

const messageSchema=new Schema({
    sender:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    reciever:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    room:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'Room'
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
    },
    updatedAt:{
        type:Date
    }
});

module.exports=Mongoose.model('Message',messageSchema);