const express=require("express");
const { jwtMiddleware } = require("../../config/jwt");
const router=express.Router();
const Friend=require("../../Schema/friends");
const User=require("../../Schema/user");

router.get("/friends",jwtMiddleware,async (req,res)=>{
    try{
        const id=req.user.userId;
        const friends=await Friend.find({
            $or:[
                {sender:userId,status:"Accepted"},
                {receiver:userId,status:"Accepted"}
            ]
        })
        .populate("sender","name email avatar provider")
        .populate("receiver","name email provider avatar")
        .sort({createdAt:-1})
        .limit(5);

        return res.status(200).json({friends});

    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Server Error"});
    }
});

router.get("/friends/requests",jwtMiddleware,async(req,res)=>{
    try{
        const userId=req.user.userId;
        const requests=await Friend.find({
            receiver:userId,
            status:"Pending"
        })
        .populate("sender","name email avatar provider")
        .limit(5);

        return res.status(200).json({requests});

    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Server Error"});
    }
});

router.get("/friends/search",jwtMiddleware,async(req,res)=>{
    try{
        const {search}=req.query;
        const users=await User.find({
            _id:{$ne:req.user.userId},
            $or:[
                {name:{$regex:search,$options:"i"}},
                {email:{$regex:search,$options:"i"}}
            ]
        });
        const response=users.map((user)=>({
            _id:user._id,
            name:user.name,
            email:user.email,
            avatar:user.avatar,
            provider:user.provider
        }));

        return res.status(200).json({users:response});
    }catch(err){
        console.log(err);
        return res.status(500).json("server error");
    }
});

router.get("/friends/request/:userId",jwtMiddleware,async(req,res)=>{
    try{
        const senderId=req.user.userId;
        const receiverId=req.params.userId;
        const receiver=await User.findById(receiverId);
        if(!receiver){
            return res.status(404).json({
                message:"User not found!"
            });
        }
        if(senderId===receiverId){
            return res.status(404).json("You cannot send friend request to yourself");
        }
        const existingFriend=await Friend.findOne({
            $or:[
                {sender:senderId,receiver:receiverId},
                {sender:receiverId,receiver:senderId}
            ]
        });
        if(existingFriend){
            return res.status(400).json({message:"Friend request or Friend already exist"});
        }
        const friendRequest=await Friend.create({
            sender:senderId,
            receiver:receiverId,
            status:"Pending"
        });
        return res.status(201).json({
            message:"Friend Request Sent"
        });
    }catch(err){
        console.log(err);
        return res.status(500).json("Server Error");
    }
});