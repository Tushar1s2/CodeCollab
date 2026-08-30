const express = require("express");
const router = express.Router();
const {jwtMiddleware,generateToken}=require("../config/jwt");

router.get("/dashboard", jwtMiddleware, (req, res) => {
    
    console.log(req.cookies);
    console.log(req.user);
    res.json("Dashboard");
});


module.exports=router;