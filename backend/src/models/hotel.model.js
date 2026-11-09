const db = require("../config/db");

const getAllHotels = async () => {
    const [rows] = await db.query("SELECT * FROM hotels");
    return rows;
};

module.exports = { getAllHotels };
