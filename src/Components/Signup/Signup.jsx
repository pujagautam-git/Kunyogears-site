import React from "react";
import "./Signup.css";
import { FaWhatsapp, FaMobileAlt, FaGoogle, FaFacebookF } from "react-icons/fa";

const SignupPopup = ({ onClose }) => {
  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        {/* Header */}
        <div className="signup-header">
          <h2>Sign up</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* Phone input */}
        <div className="phone-row">
          <span className="country-code">NP+977</span>
          <input
            type="text"
            placeholder="Please enter your phone number"
          />
        </div>

        {/* Terms */}
        <label className="terms">
          <input type="checkbox" />
          <span>
            By creating and/or using your account, you agree to our{" "}
            <a href="/">Terms of Use</a> and{" "}
            <a href="/">Privacy Policy</a>.
          </span>
        </label>

        {/* Buttons */}
        <button className="btn whatsapp">
          <FaWhatsapp />
          Send code via Whatsapp
        </button>

        <button className="btn sms">
          <FaMobileAlt />
          Send code via SMS
        </button>

        {/* Login link */}
        <p className="login-text">
          Already have an account? <a href="/">Log in Now</a>
        </p>

        {/* Social */}
        <div className="divider">Or, sign up with</div>

        <div className="social-login">
          <button className="social google">
            <FaGoogle /> Google
          </button>
          <button className="social facebook">
            <FaFacebookF /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
