import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="nav-bar">
        <h2 className="logo">chuks kitchen</h2>

        {/* hamburger icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* nav Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/explore" onClick={closeMenu}>
              Explore
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={closeMenu}>
              My Orders
            </Link>
          </li>
          <li>
            <Link to="/account" onClick={closeMenu}>
              Account
            </Link>
          </li>
        </ul>

        <ul className={`login-button-container ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/signin" onClick={closeMenu}>
              <button className="login-button-mb">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
