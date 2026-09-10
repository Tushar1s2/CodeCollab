const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../Schema/user");
const bcrypt = require("bcrypt");
const { jwtMiddleware, generateToken } = require("../config/jwt");





// Google Login
router.get("/auth/google", passport.authenticate('google', { scope: ["profile", "email"] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', session: false }), async (req, res) => {
    if (req.user.passwordHash) {
        return res.redirect('http://localhost:5173/dashboard');
    }
    else {
        return res.redirect(`http://localhost:5173/setup-password?userId=${req.user._id}`);
    }

});

router.post("/auth/setup-password", async (req, res) => {
    console.log("2");
    try {
        const { password, userId } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.findByIdAndUpdate(userId, { passwordHash: hashedPassword }, { new: true });
        const payload = {
            userId: user._id,
            providerId: user.providerId
        };
        console.log("3");
        const token = generateToken(payload);
        console.log("8");
        res.cookie("authToken", token, {
            httpOnly: true,
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000,
            sameSite: "lax"
        });

        const response = {
            id: user._id,
            email: user.email,
            name: user.name,
            provider: user.provider,
            lastLogin: user.lastLogin,
            avatar: user.avatar,
        }
        console.log("9");
        return res.json({ user: response });
    } catch (err) {
        console.log(err);
        res.status(401).json(err);
    }
});

router.get("/auth/github", passport.authenticate('github', { scope: ["user:email"] }));

router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login', session: false }), async (req, res) => {
    console.log("1");
    if (req.user.passwordHash) {
        return res.redirect('http://localhost:5173/dashboard');
    }
    else {
        return res.redirect(`http://localhost:5173/setup-password?userId=${req.user._id}`);
    }

});

router.get("/auth/me", jwtMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (user) {
            const response = {
                id: user._id,
                email: user.email,
                name: user.name,
                provider: user.provider,
                lastLogin: user.lastLogin,
                avatar: user.avatar,
            }
            return res.status(200).json({user:response});
        }
        return res.status(400).json("Login your account");
    } catch (err) {
        console.log(err);
        res.status(401).json(err);
    }
})

router.post("/auth/logout",async(req,res)=>{
    try{
        res.clearCookie("authToken");
        return res.redirect("http://localhost:5173")
    }
    catch(err){
        console.log(err);
        return res.status(401).json("Logout Failed");
    }
});

module.exports = router;