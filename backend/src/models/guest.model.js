const db = require("../config/db");

const createGuest = async (guest) => {
    const { name, email, phone } = guest;
    const [result] = await db.query(
        "INSERT INTO guests (name, email, phone) VALUES (?, ?, ?)",
        [name, email, phone]
    );
    return result;
};

module.exports = { createGuest };
