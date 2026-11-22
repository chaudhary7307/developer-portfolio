
const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        title: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        profileImage: {
            type: String,
            default: ""
        },
        about: {
            type: String,
            default: ""
        },
        github: {
            type: String,
            default: ""
        },
        linkedin: {
            type: String,
            default: ""
        },
        leetcode: {
            type: String,
            default: ""
        },
        resume: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);
const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
