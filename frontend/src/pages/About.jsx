import React from "react";

function About({ portfolio }) {
    return (
        <section className="page-container">
            <div className="page-content">
                <p className="section-label">GET TO KNOW ME</p>

                <h1>About Me</h1>

                <h2>{portfolio?.title}</h2>

                <p className="about-description">
                    {portfolio?.about || "My professional introduction will appear here."}
                </p>

                <div className="about-details">
                    <p>
                        <strong>Name:</strong> {portfolio?.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {portfolio?.email}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;