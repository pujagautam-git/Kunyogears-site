import React, { useState } from "react";
import "./Login.css";
import { FaGoogle, FaFacebookF, FaEyeSlash, FaWhatsapp, FaMobileAlt } from "react-icons/fa";

const LoginPopup = ({ onClose, openSignup }) => {
  const [activeTab, setActiveTab] = useState("password");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleWhatsappLogin = () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }
    console.log("Send OTP via WhatsApp to:", phone);
  };

  const handleSmsLogin = () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }
    console.log("Send OTP via SMS to:", phone);
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">

        {/* Header */}
        <div className="login-header">
          <div className="login-tabs">
            <span
              className={activeTab === "password" ? "active" : ""}
              onClick={() => setActiveTab("password")}
            >
              Password
            </span>
            <span
              className={activeTab === "phone" ? "active" : ""}
              onClick={() => setActiveTab("phone")}
            >
              Phone Number
            </span>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* FORM */}
        <div className="login-form">

          {/* PASSWORD LOGIN */}
          {activeTab === "password" && (
            <>
              <input
                type="text"
                placeholder="Please enter your Phone or Email"
              />

              <div className="password-field">
                <input
                  type="password"
                  placeholder="Please enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaEyeSlash className="eye-icon" />
              </div>

              <div className="forgot">
                <a href="/">Forgot password?</a>
              </div>

              <button className="login-btn">LOGIN</button>
            </>
          )}

          {/* PHONE LOGIN */}
          {activeTab === "phone" && (
            <>
              <div className="phone-input-wrapper">
                <div className="country-code">NP +977</div>
                <input
                  type="tel"
                  placeholder="Please enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                className="otp-btn whatsapp"
                onClick={handleWhatsappLogin}
              >
                <FaWhatsapp /> Send code via Whatsapp
              </button>

              <button
                className="otp-btn sms"
                onClick={handleSmsLogin}
              >
                <FaMobileAlt /> Send code via SMS
              </button>
            </>
          )}

          {/* COMMON */}
          <p className="signup-text">
            Don't have an account?{" "}
            <span onClick={openSignup}>Sign up</span>
          </p>

          <div className="divider">Or, login with</div>

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
    </div>
  );
};

export default LoginPopup;
