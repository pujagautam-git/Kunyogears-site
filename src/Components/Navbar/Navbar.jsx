import React from "react";
// import { useAuth } from "../AuthContext.jsx";
import {Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/CartContext.jsx";
// import { useAuth } from "../../context/AuthContext.jsx";
import MegaSubmenu from "../MegaSubmenu/MegaSubmenu.jsx";
import menuData from "../../data/menuData";
import SignupPopup from "../Signup/Signup.jsx";
import LoginPopup from "../Login/Login.jsx";
import logo from "../../assets/navbar/logo2.png";

import "./Navbar.css";


const Navbar =({user, logout}) =>{
    const [activeCategory, setActiveCategory] = useState(null);
const [activeSection, setActiveSection] = useState(0);
const categories = ["All Categories", ...Object.keys(menuData)];

const [showSignup, setShowSignup] = useState(false);
 const [showLogin, setShowLogin] = useState(false);

  
       const { cartCount } = useCart();
        // const { user, logout } = useAuth();


return (
<>
{/* Top Black Offer Bar */}
<div className="top-offer-bar">
<p className="offer-text">
 “Sign Up & Get Rs. 200 Off” 
 </p>
  <ul className="top-links">
    <li>Call Us</li>
    <li>Store Location</li>
    <li>Track an Order</li>
  </ul>
</div>


{/* Main Navbar Box */}
<div className="navbar-wrapper">
   

<div className="navbar-container">
{/* Logo */}
<Link to ="/"className="nav-logo">
  <img src={logo} alt="Allbirds Logo"/>
</Link>


{/* Center Menu */}

<ul className="nav-menu">
  {/* {Object.keys(menuData).map((category) => ( */}
  {categories.map((category) => (
    <li
  key={category}
  className="nav-item"
>
  <span
    className="nav-label"
    onMouseEnter={() => {
      setActiveCategory(category);
      setActiveSection(0);
    }}
  >
    {category}
  </span>

  <div
    className="mega-hover-area"
    onMouseEnter={() => setActiveCategory(category)}
    onMouseLeave={() => setActiveCategory(null)}
  >
    {activeCategory === category && (
      <MegaSubmenu
        category={category}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    )}
  </div>
</li>
  ))}
</ul>


{/* Right Side */}
<div className="nav-right">
<ul className="nav-links">
{/* <li>Our Stores</li> */}
<li>About</li>
{/* <li>ReRun</li> */}
</ul>


<div className="nav-icons">
<div className="login-area">
  {user ? (
    <div className="user-logged">
      <span className="user-name">Hi, {user.name}</span>
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  ) : (
     <ul className="auth-links">
      <li>
        <span
          className="auth-link"
          onClick={() => setShowLogin(true)}
        >
          Login
        </span>
      </li>

      <li className="signup">
        <span
          className="auth-link signup-link"
          onClick={() => setShowSignup(true)}
        >
          Sign Up
        </span>
      </li>
    </ul>
  )}
</div>

<FiSearch className="icon" />
<FiHelpCircle className="icon" />

<div className="cart-container">
    <Link to="/cart" className="cart-link">
    <FiShoppingBag className="icon" />
    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
  </Link>
  </div>
</div>
</div>
</div>
</div>
  {/* ================= POPUPS ================= */}
      {showSignup && 
        <SignupPopup onClose={() => setShowSignup(false)} />
      }

      {showLogin && (
        <LoginPopup
          onClose={() => setShowLogin(false)}
          openSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}
 
      </>
      
);
}
export default Navbar;