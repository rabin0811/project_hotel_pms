const express = require("express");
const router = express.Router();
const { listAvailableRooms } = require("../controllers/room.controller");

router.get("/available", listAvailableRooms);

module.exports = router;
