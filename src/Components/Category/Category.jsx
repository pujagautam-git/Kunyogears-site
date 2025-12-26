import React,  { useEffect, useState, useRef }  from "react";
import computer from "../../assets/menudata/1.png";
import Laptop from "../../assets/menudata/2.png";
import mobile from "../../assets/menudata/4.png"; 
import mobileaccess from "../../assets/menudata/5.png";
import laptopaccess from "../../assets/menudata/7.png";
import monitor from "../../assets/menudata/3.png";
import peripherals from "../../assets/menudata/17.png";
import audio from "../../assets/menudata/15.png";
import storage from "../../assets/menudata/24.png";
import power from "../../assets/menudata/6.png";
import gadget from "../../assets/menudata/13.png";
import office from "../../assets/menudata/16.png";
import cables from "../../assets/menudata/24.png";
import furniture from "../../assets/menudata/12.png";
import games from "../../assets/menudata/15.png";
import security from "../../assets/menudata/18.png";
import combo from "../../assets/menudata/21.png";
import brands from "../../assets/menudata/16.png";
// import support from "../../assets/menudata/19.png"; 
import "./Category.css";

const categories = [
  { title: "Computers", img: computer },
  { title: "Laptop", img: Laptop },
  { title: "Mobiles & Tablets", img: mobile },
  { title: "Mobile Accessories", img: mobileaccess },
  { title: "Laptop Accessories", img: laptopaccess },
  { title: "Monitors & Displays", img: monitor },
  { title: "Peripherals & Input Devices", img: peripherals },
  { title: "Audio, Cameras & Video", img: audio },
  { title: "Storage & Networking", img: storage },
  { title: "Power, Charging & Cooling", img: power},
  { title: "Smart Gadgets & Wearables", img: gadget},
  { title: "Office Electronics", img: office},
  { title: "Cables, Adapters & Hubs", img: cables},
  { title: "Gaming Furniture", img: furniture},
  { title: "Video Game Consoles", img: games },
  { title: "Security & Surveillance", img: security },
  { title: "Deals & Combos", img: combo },
  { title: "Brands", img: brands},
  // { title: "Support & Services", img: support},
];


const CARD_WIDTH = 212; // card width + gap

const ShopByCategorySlider = () => {
     const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const sliderItems = [...categories, ...categories];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === categories.length) {
      // silently reset (no animation)
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(0);
      }, 600);
    } else {
      sliderRef.current.style.transition = "transform 0.6s ease";
    }
  }, [index]);

  return (
    <section className="shop-category-section">
      <h2 className="section-title">Shop By Category</h2>

      <div className="slider-viewport">
        <div
          ref={sliderRef}
          className="category-slider"
          style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
        >
          {sliderItems.map((item, i) => (
            <div className="category-card" key={i}>
              <div className="category-image">
                <img src={item.img} alt={item.title} />
              </div>
              <p className="category-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySlider;
