const express = require("express");
const router = express.Router();
const { getReports } = require("../controllers/report.controller");

router.get("/", getReports);

module.exports = router;
