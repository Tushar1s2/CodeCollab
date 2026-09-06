const Mongoose=require("mongoose");
const Schema=Mongoose.Schema;

const fileSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    room:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'Room'
    },
    createdBy:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt:{
        type:Date,
        required:true
    },
    updatedAt:{
        type:Date,
    }
});

module.exports=Mongoose.model('File',fileSchema);