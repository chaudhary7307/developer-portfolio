
const Portfolio = require("../models/Portfolio");
const createPortfolio = async (req, res) => {
    try {
        const existingPortfolio = await Portfolio.findOne();

        if (existingPortfolio) {
            return res.status(400).json({
                success: false,
                message: "Portfolio already exists. Please update it instead."
            });
        }

        const portfolio = await Portfolio.create(req.body);

        res.status(201).json({
            success: true,
            message: "Portfolio created successfully",
            data: portfolio
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const getPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne();

        if (!portfolio) {
            return res.status(404).json({
                success: false,
                message: "Portfolio not found"
            });
        }

        res.status(200).json({
            success: true,
            data: portfolio
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const updatePortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOneAndUpdate(
            {},
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!portfolio) {
            return res.status(404).json({
                success: false,
                message: "Portfolio not found. Create it first."
            });
        }

        res.status(200).json({
            success: true,
            message: "Portfolio updated successfully",
            data: portfolio
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const deletePortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOneAndDelete();

        if (!portfolio) {
            return res.status(404).json({
                success: false,
                message: "Portfolio not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Portfolio deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createPortfolio,
    getPortfolio,
    updatePortfolio,
    deletePortfolio
};
