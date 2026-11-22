
import axios from "axios";

// Create Axios instance
const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Get portfolio information
export const getPortfolio = async () => {
    const response = await API.get("/portfolio");
    return response.data;
};

// Create portfolio information
export const createPortfolio = async (portfolioData) => {
    const response = await API.post("/portfolio", portfolioData);
    return response.data;
};

// Update portfolio information
export const updatePortfolio = async (portfolioData) => {
    const response = await API.put("/portfolio", portfolioData);
    return response.data;
};

// Delete portfolio information
export const deletePortfolio = async () => {
    const response = await API.delete("/portfolio");
    return response.data;
};

export default API;
