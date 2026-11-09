const { getAvailableRooms } = require("../models/room.model");

const listAvailableRooms = async (req, res) => {
    const { checkIn, checkOut, guests } = req.query;
    const rooms = await getAvailableRooms(checkIn, checkOut, guests);
    res.json(rooms);
};

module.exports = { listAvailableRooms };
