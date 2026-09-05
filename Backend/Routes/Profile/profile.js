const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../../Schema/user");
const { jwtMiddleware } = require("../../config/jwt");
const bcrypt = require("bcrypt");

router.get("profile", jwtMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json("User error");
        }
        const response = {
            id: user._id,
            email: user.email,
            name: user.name,
            provider: user.provider,
            lastLogin: user.lastLogin,
            avatar: user.avatar,
            role: user.role,
            bio: user.bio,
            location: user.location,
            joinedAt: user.joinedAt,
            skills: user.skills
        };
        res.status(200).json({ user: response });
    } catch (err) {
        res.status(400).json({ err: err, message: "Profile Get Error" })
    }
});

router.patch("/profile", jwtMiddleware, async (req, res) => {
    try {
        const update = req.body;
        const user = await User.findByIdAndUpdate(req.user.userId, update, { new: true });
        if (!user) {
            res.status(404).json({ message: "User not found!" });
        }
        const response = {
            id: user._id,
            email: user.email,
            name: user.name,
            provider: user.provider,
            lastLogin: user.lastLogin,
            avatar: user.avatar,
            role: user.role,
            bio: user.bio,
            location: user.location,
            joinedAt: user.joinedAt,
            skills: user.skills
        };
        return res.json({ user: response, message: "Updated your profile" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err, message: "Database Error" });
    }
});
router.patch("profile/password", jwtMiddleware, async (req, res) => {
    try {
        const { existingPassword, newPassword, confirmPassword } = req.body;
        if (newPassword != confirmPassword) {
            return res.status(400).json({ message: "New password do not match"});
        }
        const user=await User.findById(req.user.userId);
        if(!user){
            return res.status(404).json("User not found!");
        }
        const isMatch = await bcrypt.compare(existingPassword, user.passwordHash);
        if(!isMatch){
            res.status(401).json({message:"Existing password is incorrect"});
        }
        const hash=await bcrypt.hash(newPassword,10);
        const changedUser=await User.findByIdAndUpdate(req.user.userId,{passwordHash:hash});
        res.status(200).json({message:"Password changed!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Database error"});
    }
});