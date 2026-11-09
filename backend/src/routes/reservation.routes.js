const express = require("express");
const router = express.Router();
const { bookRoom } = require("../controllers/reservation.controller");

router.post("/book", bookRoom);

module.exports = router;
