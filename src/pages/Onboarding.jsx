import React from "react";
import "../styles/Onboarding.css";
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      {/* Right side background */}
      <div className="right-side-bg"></div>

      {/* Left side content */}
      <div className="left-side">
        <div className="signin">
          <button onClick={() => navigate("/signin")}>Sign In</button>
        </div>
        <h2 className="title-onboarding">Chuks Kitchen</h2>

        {/* Main title & subtitle */}
        <h2 className="heading">Your Authentic Taste of Nigeria</h2>
        <h3 className="heading-detail">
          Experience homemade flavors delivered fresh to your desk or home. We
          bring the rich culinary heritage of Nigeria right to your doorstep.
        </h3>

        {/* Services / features */}
        <div className="services">
          <div className="icon-description">
            <div className="icon-wrapper">
              <FaUtensils className="icon" />
            </div>
            <div className="description">
              <h3>Freshly Prepared</h3>
            </div>
          </div>
          <div className="icon-description">
            <div className="icon-wrapper">
              <FaUtensils className="icon" />
            </div>
            <div className="description">
              <h3>Support Local Business</h3>
            </div>
          </div>
          <div className="icon-description">
            <div className="icon-wrapper">
              <FaUtensils className="icon" />
            </div>
            <div className="description">
              <h3>Fast & Reliable Delivery</h3>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="actions">
          <button
            className="start-order"
            onClick={() => navigate("/signup")} // goes to signup page
          >
            Start Your Order
          </button>

          <button className="learn-more" onClick={() => navigate("/home")}>
            Learn More About Us
          </button>
        </div>

        {/* Footer */}
        <div className="copy-right">
          <div className="copy-links">
            <ul>
              <li>
                <p className="copy-paragraph">&copy; 2026 Chuks Kitchen.</p>
              </li>
              <li>
                <a href="#" className="policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="policy">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
