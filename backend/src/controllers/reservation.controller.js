const { createReservation } = require("../models/reservation.model");
const { createGuest } = require("../models/guest.model");

const bookRoom = async (req, res) => {
    const { guest, room_id, check_in, check_out } = req.body;

    const guestResult = await createGuest(guest);
    const reservationResult = await createReservation({
        guest_id: guestResult.insertId,
        room_id,
        check_in,
        check_out
    });

    res.json({ reservation_id: reservationResult.insertId });
};

module.exports = { bookRoom };
