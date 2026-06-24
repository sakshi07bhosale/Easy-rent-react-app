import "./About.css";

function About() {
    return (
        <div className="about">

            {/* Page Header */}
            <section className="about-hero">
                <h1 className="about-title">About EasyRent</h1>
                <p className="about-sub">
                    <i>We're on a mission to make renting a home simple, honest, and accessible for everyone.</i>
                </p>
            </section>

            {/* Our Story */}
            <section className="about-section">
                <h2 className="about-section-title">Our Story</h2>
                <p className="about-text">
                    EasyRent was founded in 2022 by a group of renters who were tired of dealing with
                    outdated listings, unreliable landlords, and complicated processes. We built the
                    platform we always wished existed — one that puts renters first.
                </p>
                <p className="about-text">
                    Today, EasyRent hosts thousands of verified properties across the country, helping
                    families, students, and professionals find a place to call home.
                </p>
            </section>

            {/* Mission & Values */}
            <section className="about-section about-section--tinted">
                <h2 className="about-section-title">Our Mission & Values</h2>
                <p className="about-section-desc">
                    <i>Everything we do is guided by a few core principles.</i>
                </p>
                <div className="about-values">
                    <div className="value-card">
                        <span className="value-icon">🤝</span>
                        <h3>Trust</h3>
                        <p>We verify every listing and landlord so renters can browse with confidence.</p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon">💡</span>
                        <h3>Simplicity</h3>
                        <p>Finding a rental should be easy. We keep the experience clean and friction-free.</p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon">🌍</span>
                        <h3>Accessibility</h3>
                        <p>Great housing options for everyone, regardless of budget or location.</p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon">🔒</span>
                        <h3>Transparency</h3>
                        <p>No hidden fees, no fake prices. What you see is exactly what you get.</p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="about-section">
                <h2 className="about-section-title">EasyRent by the Numbers</h2>
                <p className="about-section-desc"><i>A growing community of happy renters and trusted landlords.</i></p>
                <div className="about-stats">
                    <div className="stat-card">
                        <span className="stat-number">10,000+</span>
                        <span className="stat-label">Listed Properties</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Cities Covered</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">25,000+</span>
                        <span className="stat-label">Happy Renters</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">4.8 ⭐</span>
                        <span className="stat-label">Average Rating</span>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="about-section about-section--tinted">
                <h2 className="about-section-title">Get in Touch</h2>
                <p className="about-text">
                    Have a question, feedback, or want to list your property? We'd love to hear from you.
                </p>
                <div className="about-contact">
                    <span>📧 support@easyrent.com</span>
                    <span>📞 +1 (800) 123-4567</span>
                    <span>📍 New York, USA</span>
                </div>
            </section>

        </div>
    );
}

export default About;
