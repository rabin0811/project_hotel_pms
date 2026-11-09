const db = require("../config/db");

const getReports = async (req, res) => {
    const [rows] = await db.query("SELECT * FROM reservations");
    res.json(rows);
};

module.exports = { getReports };
