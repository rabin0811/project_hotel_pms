const db = require("../config/db");

const createPayment = async (payment) => {
    const { reservation_id, amount, status } = payment;
    const [result] = await db.query(
        "INSERT INTO payments (reservation_id, amount, status) VALUES (?, ?, ?)",
        [reservation_id, amount, status]
    );
    return result;
};

module.exports = { createPayment };
