
const express = require("express");

const router = express.Router();

const {
    createPortfolio,
    getPortfolio,
    updatePortfolio,
    deletePortfolio
} = require("../controllers/portfolioController");

// Create portfolio
router.post("/", createPortfolio);

// Get portfolio
router.get("/", getPortfolio);

// Update portfolio
router.put("/", updatePortfolio);

// Delete portfolio
router.delete("/", deletePortfolio);

module.exports = router;
