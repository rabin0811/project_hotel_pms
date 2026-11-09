const { createReservation } = require("../models/reservation.model");
const { createGuest } = require("../models/guest.model");

const bookRoomService = async (guest, room_id, check_in, check_out) => {
    const guestResult = await createGuest(guest);
    const reservationResult = await createReservation({
        guest_id: guestResult.insertId,
        room_id,
        check_in,
        check_out
    });
    return reservationResult.insertId;
};

module.exports = { bookRoomService };
