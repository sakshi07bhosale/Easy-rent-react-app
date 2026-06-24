import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-logo">
                🏠 EasyRent
            </NavLink>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/properties" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        Properties
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
