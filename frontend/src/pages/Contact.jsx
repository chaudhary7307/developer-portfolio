
import React from "react";

function Contact({ portfolio }) {
    return (
        <section className="page-container">
            <div className="page-content">

                <p className="section-label">LET'S CONNECT</p>

                <h1>Contact Me</h1>

                <p className="contact-description">
                    Interested in working together or discussing an opportunity?
                    Feel free to contact me.
                </p>

                {portfolio?.email && (
                    <a
                        href={`mailto:${portfolio.email}`}
                        className="primary-btn"
                    >
                        Send Email
                    </a>
                )}

                <div className="contact-links">

                    {portfolio?.github && (
                        <a
                            href={portfolio.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    )}

                    {portfolio?.linkedin && (
                        <a
                            href={portfolio.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    )}

                    {portfolio?.leetcode && (
                        <a
                            href={portfolio.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LeetCode
                        </a>
                    )}

                </div>
            </div>
        </section>
    );
}

export default Contact;
