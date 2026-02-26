import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import "../styles/Footer.css"
function Footer() {
   const closeMenu = () => setIsOpen(false);
  //  footer up arrow
   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };
  return (
    <>
      <footer>
        {/* footer links */}
        <div className="footer-links">
          <ul>
            <li className="footer-logo">Chuks Kitchen</li>
            <li className="footer-description">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </li>
          </ul>
          <ul className="footer-nav">
            <li className="quick-contact-footer">Quick Links</li>
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
                My Order
              </Link>
            </li>
            <li>
              <Link to="/account" onClick={closeMenu}>
                Account
              </Link>
            </li>
            <li>Contact</li>
          </ul>
          <ul className="contact">
            <li className="quick-contact-footer">Contact Us</li>
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
          <ul className="social-links-footer">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
        <p>&copy; 2026 Lift Media. All rights reserved.</p>
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </footer>
    </>
  );
}

export default Footer
