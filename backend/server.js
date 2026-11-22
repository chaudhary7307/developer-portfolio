require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();
const portfolioRoutes = require("./routes/portfolioRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Developer Portfolio Backend is Running!");
});

// Start server after database connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();