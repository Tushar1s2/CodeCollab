const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../../Schema/user");
const { jwtMiddleware } = require("../../config/jwt");

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
            role:user.role,
            bio:user.bio,
            location:user.location,
            joinedAt:user.joinedAt,
            skills:user.skills
        };
        res.status(200).json({user:response});
    } catch (err) {
        res.status(400).json({ err: err, message: "Profile Get Error" })
    }
});