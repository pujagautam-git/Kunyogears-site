import React from "react";
import { Link } from "react-router-dom"; // or replace with <a> if you don't use react-router
import "./Menlist.css";
const data = {
  shoes: {
    left: [
      "Sale",
      "New Arrivals",
      "Bestsellers",
      "$100 and Under",
      "Holiday Dressing",
      "Cruise in Color",
      "Stormy Season Styles",
    ],
    columns: [
      {
        title: "Men's Shoes",
        items: [
          "Shop All",
          "Sneakers",
          "All-Weather",
          "Slippers",
          "Slip Ons",
          "High Tops",
        ],
      },
      {
        title: "Customer Favorites",
        items: [
          "Tree Dasher 2",
          "Wool Runner NZ",
          "Tree Runner",
          "Wool Cruiser",
          "Tree Runner NZ",
          "Wool Runner NZ Waterproof",
        ],
      },
      {
        title: "Top Add-Ons",
        items: ["Socks", "Apparel", "Bags", "Gift Cards"],
      },
    ],
  },

  socks: {
    left: [
      "Sale",
      "New Arrivals",
      "Best Sellers",
      "Everyday Essentials",
      "Cold Weather",
    ],
    columns: [
      {
        title: "Men's Socks",
        items: [
          "Shop All",
          "No Shows",
          "Ankle Socks",
          "Crew Socks",
          "Compression",
        ],
      },
      {
        title: "Apparel",
        items: [
          "T-Shirts",
          "Sweaters",
          "Hoodies",
          "Joggers",
        ],
      },
      {
        title: "Top Add-Ons",
        items: ["Bags", "Insoles", "Gift Cards"],
      },
    ],
  },

  sale: {
    left: [
      "Final Sale",
      "Limited Time",
      "Clearance",
    ],
    columns: [
      {
        title: "Sale Shoes",
        items: [
          "Sneakers",
          "Slippers",
          "All-Weather",
        ],
      },
      {
        title: "Sale Apparel",
        items: [
          "Socks",
          "Hoodies",
          "Sweaters",
        ],
      },
      {
        title: "More",
        items: ["Bundles", "Gift Cards"],
      },
    ],
  },
};


const MenSubmenu =({ active,type="shoes", onMouseEnter, onMouseLeave  }) => {
    const menu = data[type]; // ✅ FIX

  if (!menu) return null;
  
  // `active` is a boolean that toggles the .active class on the wrapper
  return (
    <div className={`menlist-wrapper ${active ? "active" : ""}`}
     role="menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
  >
      <div className="menlist-left">
        {menu.left.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>

      {/* CENTER COLUMNS */}
      <div className="menlist-center">
        {menu.columns.map((col, i) => (
          <div className="menlist-column" key={i}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* RIGHT PROMO */}
      <div className="menlist-right">
        <div className="promo-large">
          <span className="promo-tag">Sitewide Sale</span>
          <h2>30–50% OFF</h2>
          <p>Order by 12/21 for Christmas Delivery</p>
        </div>

        <div className="promo-small-grid">
          <div className="promo-small">Gift Guide</div>
          <div className="promo-small">Shop Men’s Slippers</div>
        </div>
      </div>
    </div>
  );
}
export default MenSubmenu;