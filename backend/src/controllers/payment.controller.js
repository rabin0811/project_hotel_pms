const { createPayment } = require("../models/payment.model");

const processPayment = async (req, res) => {
    const payment = req.body;
    const result = await createPayment(payment);
    res.json({ payment_id: result.insertId, status: "PAID" });
};

module.exports = { processPayment };
