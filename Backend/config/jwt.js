const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
    const token = req.cookies.authToken;
    if (!token) {
        return res.status(401).json({
            err: "No token provided"
        });
    }
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);

        return res.status(401).json({
            err: "Invalid token"
        });
    }
};

const generateToken = (payload) => {

    return jwt.sign(payload, process.env.JWT_SECRET);
}

module.exports = { jwtMiddleware, generateToken };