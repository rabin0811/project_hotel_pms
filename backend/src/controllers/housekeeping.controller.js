const db = require("../config/db");

const updateRoomStatus = async (req, res) => {
    const { room_id, status } = req.body;
    await db.query("UPDATE rooms SET status = ? WHERE id = ?", [status, room_id]);
    res.json({ message: "Room status updated" });
};

module.exports = { updateRoomStatus };
