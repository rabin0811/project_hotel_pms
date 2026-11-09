const { findUserByEmail } = require("../models/user.model");
const { generateToken } = require("../config/jwt");

const login = async (req, res) => {
    const { email } = req.body;
    const user = await findUserByEmail(email);
    if (!user) return res.status(401).json({ message: "User not found" });

    const token = generateToken({ id: user.id, role: user.role });
    res.json({ token, user });
};

module.exports = { login };
