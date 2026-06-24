import { NavLink } from "react-router";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <span className="footer-logo">🏠 EasyRent</span>
                    <p>Find your perfect rental property with ease. Browse thousands of listings across the country.</p>
                </div>

                <div className="footer-links-group">
                    <h4>Navigation</h4>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/properties">Properties</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h4>Contact</h4>
                    <ul>
                        <li>📧 support@easyrent.com</li>
                        <li>📞 +1 (800) 123-4567</li>
                        <li>📍 New York, USA</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} EasyRent. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
