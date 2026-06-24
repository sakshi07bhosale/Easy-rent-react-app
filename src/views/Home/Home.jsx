import { Link } from "react-router";
import { Search, BadgeCheck, MessageCircle, Star, Home as HomeIcon, MapPin, Eye, PhoneCall } from "lucide-react";
import "./Home.css";

function Home() {
    return (
        <div className="home">

            {/* Hero */}
            <section className="home-hero">
                <div className="home-hero-icon">
                    <HomeIcon size={48} strokeWidth={1.5} color="var(--accent)" />
                </div>
                <h1 className="home-hero-title">Find Your Perfect Home</h1>
                <p className="home-hero-sub">
                    <i>Browse thousands of verified rental listings across the country.
                    Apartments, villas, studios — all in one place.</i>
                </p>
                <Link to="/properties" className="home-cta-btn">
                    <Search size={16} strokeWidth={2} />
                    Browse Properties
                </Link>
            </section>

            {/* Features */}
            <section className="home-section">
                <h2 className="section-title">Why Choose EasyRent?</h2>
                <p className="section-desc">
                    <i>We make renting simple, transparent, and stress-free for everyone.</i>
                </p>
                <div className="home-features">
                    <div className="feature-card">
                        <span className="feature-icon">
                            <Search size={28} strokeWidth={1.8} color="var(--accent)" />
                        </span>
                        <h3>Smart Search</h3>
                        <p>Filter by city, type, size, and budget to find exactly what you need in seconds.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">
                            <BadgeCheck size={28} strokeWidth={1.8} color="var(--accent)" />
                        </span>
                        <h3>Verified Listings</h3>
                        <p>Every property is reviewed and verified so you never deal with fake or outdated listings.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">
                            <MessageCircle size={28} strokeWidth={1.8} color="var(--accent)" />
                        </span>
                        <h3>Easy Contact</h3>
                        <p>Reach landlords directly through the platform — no middlemen, no hidden fees.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">
                            <Star size={28} strokeWidth={1.8} color="var(--accent)" />
                        </span>
                        <h3>Ratings & Reviews</h3>
                        <p>Read honest reviews from tenants who have lived there before making your decision.</p>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="home-section home-section--tinted">
                <h2 className="section-title">How It Works</h2>
                <p className="section-desc">
                    <i>Renting your next home takes just three simple steps.</i>
                </p>
                <div className="home-steps">
                    <div className="step-card">
                        <span className="step-icon">
                            <Search size={24} strokeWidth={1.8} color="var(--accent)" />
                        </span>
                        <h3>Search</h3>
                        <p>Enter your city or use filters to narrow down the perfect rental for your needs.</p>
                    </div>
                    <div className="step-card">
                        <span className="step-icon">
                            <Eye size={24} strokeWidth={1.8} color="var(--accent)" />
                        </span>
                        <h3>Explore</h3>
                        <p>View photos, amenities, ratings, and pricing details for each property.</p>
                    </div>
                    <div className="step-card">
                        <span className="step-icon">
                            <PhoneCall size={24} strokeWidth={1.8} color="var(--accent)" />
                        </span>
                        <h3>Connect</h3>
                        <p>Contact the landlord, schedule a visit, and move in on your terms.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
