const db = require("../config/db");

const getAvailableRooms = async (checkIn, checkOut, guests) => {
    const [rows] = await db.query(
        "SELECT * FROM rooms WHERE capacity >= ? AND id NOT IN (SELECT room_id FROM reservations WHERE (check_in BETWEEN ? AND ? OR check_out BETWEEN ? AND ?))",
        [guests, checkIn, checkOut, checkIn, checkOut]
    );
    return rows;
};

module.exports = { getAvailableRooms };
