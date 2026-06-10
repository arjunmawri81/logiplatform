const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const merchantRoutes = require("./routes/merchantRoutes");
const orderRoutes = require("./routes/orderRoutes");
const shipmentRoutes = require("./routes/shipmentRoutes");
const trackingRoutes = require("./routes/trackingRoutes");
const walletRoutes = require("./routes/walletRoutes");
const billingRoutes = require("./routes/billingRoutes");
const reportRoutes = require("./routes/reportRoutes");
const adminRoutes = require("./routes/adminRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes"); // NEW

dotenv.config();

// Database Connection
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "LogiTrack Backend Running 🚀",
  });
});

// API Routes
app.use("/api/auth", authRoutes);

app.use("/api/merchant", merchantRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/shipments", shipmentRoutes);

app.use("/api/tracking", trackingRoutes);

app.use("/api/wallet", walletRoutes);

app.use("/api/billing", billingRoutes);

app.use("/api/reports", reportRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/invoices", invoiceRoutes); // NEW

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});