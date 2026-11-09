const express = require("express");
const router = express.Router();
const { updateRoomStatus } = require("../controllers/housekeeping.controller");

router.post("/update", updateRoomStatus);

module.exports = router;
