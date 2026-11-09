const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth.routes");
const roomRoutes = require("./routes/room.routes");
const reservationRoutes = require("./routes/reservation.routes");
const paymentRoutes = require("./routes/payment.routes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
    res.send("Hotel PMS Backend API is running...");
});

module.exports = app;
