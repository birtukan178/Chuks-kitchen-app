import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaPhone,
  FaGoogle,
  FaFacebookF,
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "../styles/Login.css";

function Form({
  title,
  showPhone = false,
  showConfirmPassword = false,
  showForgotPassword = false,
  showTerms = false,
  buttonText,
  bottomText,
  bottomLinkText,
  bottomLinkPath,
}) {
//  show and hide password icon sate management
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="login-container">
      {/* Right side */}
      <div className="right-side-bg-login">
        <h1>Chuks Kitchen</h1>
        <h3 className="sub-title">
          Your journey to delicious, authentic Nigerian meals starts here. Sign
          up or log in to order your favorites today!
        </h3>
      </div>

      {/* Form side */}
      <div className="login-input">
        <h2 className="title">Chuks Kitchen</h2>
        <h2 className="sub-title">{title}</h2>

        {/* Email */}
        <label>Email</label>
        <div className="input-group">
          <FaEnvelope className="icon" />
          <input type="text" placeholder="name@gmail.com" />
        </div>

        {/* Phone (Signup only) */}
        {showPhone && (
          <>
            <label>Phone Number</label>
            <div className="input-group">
              <FaPhone className="icon" />
              <input type="text" placeholder="08012345678" />
            </div>
          </>
        )}

        {/* Password */}
        <label>Password</label>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="********"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password (Signup only) */}
        {showConfirmPassword && (
          <>
            <label>Confirm Password</label>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="********"
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </>
        )}

        {/* Forgot Password (Login only) */}
        {showForgotPassword && (
          <h6 className="forgot-pw">
            <Link to="/forgot-password">Forgot Password?</Link>
          </h6>
        )}

        {/* Terms checkbox (Signup only) */}
        {showTerms && (
          <div className="terms">
            <input type="checkbox" /> <span>I agree to Terms & Conditions</span>
          </div>
        )}

        {/* Submit button */}
        <button>{buttonText}</button>

        <h6 className="or-continue">or continue with</h6>

        {/* Social buttons */}
        <div className="social-btn google">
          <FaGoogle className="social-icon google-icon" />
          <span>Continue with Google</span>
        </div>

        <div className="social-btn facebook">
          <FaFacebookF className="social-icon facebook-icon" />
          <span>Continue with Facebook</span>
        </div>

        {/* Bottom link using <Link> */}
        <h6 className="create-account">
          {bottomText} <Link to={bottomLinkPath}>{bottomLinkText}</Link>
        </h6>

        {/* Back to Home button */}
        <div className="back-home">
          <Link to="/home" className="back-home-btn">
            <FaArrowLeft className="back-icon" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
