import React from "react";
import { Link } from "react-router-dom";

function Hero({ portfolio }) {
    if (!portfolio) {
        return <p>Portfolio information is not available.</p>;
    }

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="welcome-text">HELLO, I AM</p>

                <h1>{portfolio.name}</h1>

                <h2>{portfolio.title}</h2>

                <p className="hero-description">
                    {portfolio.about}
                </p>

                <div className="social-links">
                    {portfolio.github && (
                        <a href={portfolio.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    )}

                    {portfolio.linkedin && (
                        <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    )}

                    {portfolio.leetcode && (
                        <a href={portfolio.leetcode} target="_blank" rel="noopener noreferrer">
                            LeetCode
                        </a>
                    )}

                    {portfolio.email && (
                        <a href={`mailto:${portfolio.email}`}>
                            Email
                        </a>
                    )}
                </div>

                <div className="hero-buttons">
                    <Link to="/contact" className="primary-btn">
                        Contact Me
                    </Link>

                    {portfolio.resume && (
                        <a
                            href={portfolio.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-btn"
                        >
                            Download Resume
                        </a>
                    )}
                </div>
            </div>

            <div className="hero-image">
                <img
                    src={
                        portfolio.profileImage ||
                        "/profile.jpeg"
                    }
                    alt={portfolio.name}
                />
            </div>
        </section>
    );
}

export default Hero;