const express = require("express");
const router = express.Router();
const User = require("../Schema/user");
const { jwtMiddleware, generateToken } = require("../config/jwt");

router.get("/dashboard", jwtMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(401).json("No User found");
        }
        const response = {
            id: user._id,
            email: user.email,
            name: user.name,
            provider: user.provider,
            lastLogin: user.lastLogin,
            avatar: user.avatar
        }
        return res.status(200).json({ user: response });
    }catch(err){
        console.log(err);
        return res.status(500).json("Database error");
    }
});




module.exports = router;