const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET || "secretkey", {
        expiresIn: "1d"
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET || "secretkey");
};

module.exports = { generateToken, verifyToken };
