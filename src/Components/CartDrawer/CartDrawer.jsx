import React from "react";
import { Link } from "react-router-dom";
import "./CartDrawer.css";

const CartDrawer = ({ cartItems, onClose }) => {
  const isEmpty = cartItems.length === 0;

  return (
    <div className="cart-drawer">
      {/* HEADER */}
      <div className="cart-header">
        <h3>CART ({cartItems.length})</h3>
        <p className="free-shipping">Spend $75 more to earn free shipping!</p>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="cart-progress"></div>

      {/* BODY */}
      {isEmpty ? (
        /* EMPTY CART UI */
        <div className="empty-cart">
          <h2>Your cart is empty. Start shopping!</h2>

          <div className="cart-actions">
            <Link to="/women" className="cart-btn">SHOP WOMENS</Link>
            <Link to="/men" className="cart-btn">SHOP MENS</Link>
            <Link to="/socks" className="cart-btn">SHOP SOCKS</Link>
            <Link to="/women-sale" className="cart-btn">SHOP WOMEN'S SALE</Link>
            <Link to="/men-sale" className="cart-btn">SHOP MEN'S SALE</Link>
          </div>
        </div>
      ) : (
        /* CART WITH ITEMS UI */
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <span>Qty: {item.quantity}</span>
              </div>
            </div>
          ))}

          <div className="cart-footer">
            <button className="checkout-btn">CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
