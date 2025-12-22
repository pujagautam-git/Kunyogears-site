import React from "react";
import { Link } from "react-router-dom"; // or replace with <a> if you don't use react-router
import "./Womenlist.css";


const   WomenSubmenu =({ active, onMouseEnter, onMouseLeave  }) => {
  // `active` is a boolean that toggles the .active class on the wrapper
  return (
    <div className={`submenu-wrapper ${active ? "active" : ""}`}
     role="menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
  >
      <div className="submenu-container">
        {/* Column 1 - Category list */}
        <div>
          <div className="submenu-col-title">CYBER MONDAY EXTENDED</div>
          <ul className="submenu-list-first">
            <li><Link to="/new-arrival">New Arrivals</Link></li>
            <li><Link to="/bestsellers">Bestsellers</Link></li>
            <li><Link to="/under-100">$100 and under</Link></li>
            <li><Link to="/holiday">Holiday dressing</Link></li>
            <li><Link to="/color">Cruise in color</Link></li>
            <li><Link to="/storm">Stormy season styles</Link></li>
          </ul>
        </div>

        {/* Column 2 - Men's Shoes (sub-list) */}
        <div>
          <div className="submenu-col-title">WOMEN'S SHOES</div>
          <ul className="submenu-list">
            <li><Link to="/women/shop-all">Shop All</Link></li>
            <li><Link to="/women/sneakers">Sneakers</Link></li>
            <li><Link to="/women/all-weather">All-Weather</Link></li>
            <li><Link to="/women/slippers">Slippers</Link></li>
            <li><Link to="/women/hiking">Hiking</Link></li>
            <li><Link to="/women/slip-ons">Slip Ons</Link></li>
            <li><Link to="/women/high-tops">High Tops</Link></li>
            <li><Link to="/women/high-tops">Flats</Link></li>
            
          </ul>
        </div>

        {/* Column 3 - Customer favorites */}
        <div>
          <div className="submenu-col-title">POPULAR PICKS</div>
          <ul className="submenu-list">
            <li><Link to="/products/tree-dasher-2">Tree Dasher 2</Link></li>
            <li><Link to="/products/wool-runner-nz">Wool Runner NZ Waterproof</Link></li>
            <li><Link to="/products/tree-runner">Tree Runner</Link></li>
            <li><Link to="/products/wool-cruiser">Wool Cruiser</Link></li>
            <li><Link to="/products/tree-runner-nz">Tree Runner NZ</Link></li>
            <li><Link to="/products/wool-runner-nz-waterproof">Wool Runner NZ Waterproof</Link></li>
          </ul>
        </div>

        {/* Column 4 - Top add-ons */}
        <div>
          <div className="submenu-col-title">FAVORITE ADD-ONS</div>
          <ul className="submenu-list">
            <li><Link to="/socks">Socks</Link></li>
            <li><Link to="/apparel">Apparel</Link></li>
            <li><Link to="/bags">Bags</Link></li>
            <li><Link to="/gift-cards">Gift Cards</Link></li>
          </ul>
        </div>

        {/* Column 5 - Promo cards (right side) */}
        <div className="submenu-right">
          <div className="submenu-card submenu-big" role="button" aria-label="Shop men's sale">
            <img src="/images/promo-sheep.jpg" alt="Shop men's sale" />
            <div className="submenu-card-text">SHOP WOMEN'S SALE</div>
          </div>

          <div className="submenu-small">
            <div className="submenu-card" role="button" aria-label="Gift guide">
              <img src="/images/gift-guide.jpg" alt="Gift guide" />
              <div className="submenu-card-text">GIFT GUIDE</div>
            </div>

            <div className="submenu-card" role="button" aria-label="Shop men's slippers">
              <img src="/images/slippers.jpg" alt="Shop men's slippers" />
              <div className="submenu-card-text">SHOP WOMEN'S SLIPPERS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WomenSubmenu;