const express = require("express");
const router = express.Router();
const { processPayment } = require("../controllers/payment.controller");

router.post("/pay", processPayment);

module.exports = router;
