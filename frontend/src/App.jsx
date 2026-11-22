import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./pages/About";
import Contact from "./pages/Contact";

import { getPortfolio } from "./services/api";

import "./App.css";

function App() {
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const data = await getPortfolio();
                setPortfolio(data.data);
            } catch (error) {
                console.error(error);

                setError(
                    error.response?.data?.message ||
                    "Unable to load portfolio information."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, []);

    if (loading) {
        return <h2 className="status-message">Loading Portfolio...</h2>;
    }

    if (error) {
        return <h2 className="status-message">{error}</h2>;
    }

    return (
        <div className="app">
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={<Hero portfolio={portfolio} />}
                />

                <Route
                    path="/about"
                    element={<About portfolio={portfolio} />}
                />

                <Route
                    path="/contact"
                    element={<Contact portfolio={portfolio} />}
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
    );
}

export default App;