const db = require("../config/db");

const createReservation = async (data) => {
    const { guest_id, room_id, check_in, check_out } = data;
    const [result] = await db.query(
        "INSERT INTO reservations (guest_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)",
        [guest_id, room_id, check_in, check_out]
    );
    return result;
};

module.exports = { createReservation };
