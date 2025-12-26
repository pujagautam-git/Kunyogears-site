import React, { useRef } from "react";
import oneplus12 from "../../assets/mobile/oneplus12.webp";
import appleiphone16 from "../../assets/mobile/appleiphone.webp";
import oneplus13 from "../../assets/mobile/oneplus13.webp";
import HMD from "../../assets/mobile/hmd crest.webp";
import motorola from "../../assets/mobile/motorola.webp";
import samsung36 from "../../assets/mobile/galaxy36.webp";
import mobilebannerImg from "../../assets/mobile/mobile banner.png";

import "./Mobile Deals.css";

const phones = [
  {
    name: "OnePlus 12",
    price: "99,999",
    oldPrice: "1,39,999",
    save: "40,000",
    off: "29% OFF",
    sold: 3,
    rating: "0.0",
    img: oneplus12,
  },
  {
    name: "Apple iPhone 16",
    price: "1,35,299",
    oldPrice: "1,38,599",
    save: "3,300",
    off: "3% OFF",
    sold: 71,
    rating: "0.0",
    img: appleiphone16,
  },
  {
    name: "OnePlus 13",
    price: "1,41,999",
    oldPrice: "1,49,999",
    save: "8,000",
    off: "6% OFF",
    sold: 74,
    rating: "0.0",
    img: oneplus13,
  },
  {
    name: "HMD Crest 5G",
    price: "17,999",
    oldPrice: "18,999",
    save: "1,000",
    off: "6% OFF",
    sold: 99,
    rating: "4.0",
    img: HMD,
  },
  {
    name: "Motorola Moto G85 5G",
    price: "37,499",
    oldPrice: "39,999",
    save: " 2,500",
    off: " 6% OFF",
    sold: 55,
    rating: "0.0",
    img: motorola,
  },
  {
    name: "Samsung Galaxy A36",
    price: "54,999",
    oldPrice: "59,999",
    save: "1,000",
    off: "3% OFF",
    sold: 3,
    rating: "4.2",
    img: samsung36,
  },
   {
    name: "OnePlus 12",
    price: "99,999",
    oldPrice: "1,39,999",
    save: "40,000",
    off: "29% OFF",
    sold: 3,
    rating: "0.0",
    img: oneplus12,
  },
  {
    name: "Apple iPhone 16",
    price: "1,35,299",
    oldPrice: "1,38,599",
    save: "3,300",
    off: "3% OFF",
    sold: 71,
    rating: "0.0",
    img: appleiphone16,
  },
  {
    name: "OnePlus 13",
    price: "1,41,999",
    oldPrice: "1,49,999",
    save: "8,000",
    off: "6% OFF",
    sold: 74,
    rating: "0.0",
    img: oneplus13,
  },
  {
    name: "HMD Crest 5G",
    price: "17,999",
    oldPrice: "18,999",
    save: "1,000",
    off: "6% OFF",
    sold: 99,
    rating: "4.0",
    img: HMD,
  },
  {
    name: "Motorola Moto G85 5G",
    price: "37,499",
    oldPrice: "39,999",
    save: " 2,500",
    off: " 6% OFF",
    sold: 55,
    rating: "0.0",
    img: motorola,
  },
  {
    name: "Samsung Galaxy A36",
    price: "54,999",
    oldPrice: "59,999",
    save: "1,000",
    off: "3% OFF",
    sold: 3,
    rating: "4.2",
    img: samsung36,
  },
];

export default function MobileDeals() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -260, // card width + gap
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  };

  return (
    <>
    {/* 🔹 Banner Section */}
      <div className="mobile-banner-container">
        <img src={mobilebannerImg} alt="Mobile Deals Banner" />
      </div>


    <div className="deals-container">
      <div className="deals-header">
        <h2>Top Deals on Mobile Phones</h2>
        <span className="view-all">View All →</span>
      </div>

      <div className="deals-slider">
        <button className="nav-btn left" onClick={slideLeft}>
          ‹
        </button>

        <div className="deals-list" ref={sliderRef}>
          {phones.map((phone, index) => (
            <div className="deal-card" key={index}>
              {phone.off && <span className="discount">{phone.off}</span>}

              <div className="image-wrap">
                <img src={phone.img} alt={phone.name} />
              </div>

              <h3>{phone.name}</h3>

              <div className="price">Rs. {phone.price}</div>

              {phone.oldPrice && (
                <div className="old-price">
                  Rs. {phone.oldPrice}
                  <span>Save Rs. {phone.save}</span>
                </div>
              )}

              <div className="meta">
                <span className="rating">★ {phone.rating}</span>
                <span className="sold">{phone.sold} Sold</span>
              </div>

              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={slideRight}>
          ›
        </button>
      </div>
    </div>
    </>
  );
}
