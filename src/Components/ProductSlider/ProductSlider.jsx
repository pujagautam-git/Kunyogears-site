import React, { useState } from "react";
import off1 from "../../assets/productslide/31.png";
import off2 from "../../assets/productslide/28.png";
import off3 from "../../assets/productslide/29.png";
import off4 from "../../assets/productslide/27.png";
import off5 from "../../assets/productslide/36.png";
import off6 from "../../assets/productslide/39.png";
import off7 from "../../assets/productslide/35.png";
import off8 from "../../assets/productslide/33.png";
import "./ProductSlider.css";

const products = [
  {
    id: 1,
      type: "Laptop",
  name: "MacBook Air M2",
  model: "M2",
  price: "$999",
  oldPrice: "$1199",
  img: off1,
  // usage: "Students / Office / Design",

  specs: {
    Processor: "Apple M2",
    Graphics: "8-core GPU",
    RAM: "8GB Unified Memory",
    Storage: "256GB SSD",
    Display: "13.6-inch Liquid Retina",
  },
},
  {
    id: 2,
    img: off2,
   type: "Monitor",
  name: "LG 22\" Full HD IPS Monitor",
  model: "22MP68VQ",
  price: "$129",
  oldPrice: "$159",
  // usage: "Office / Home / Casual Gaming",
  specs: {
    "Screen Size": "22-inch (21.5\" diagonal)",
    "Panel Type": "IPS",
    // "Resolution": "1920 × 1080",
    "Refresh Rate": "60 Hz",
    // "Brightness": "250 cd/m²",
    // "Response Time": "5 ms",
    "Viewing Angle": "178°/178°",
    "Ports": "HDMI, VGA, Headphone Out",
  },
},
  {
    id: 3,
    img: off3,
    tye:"Monitor",
   name: "Samsung Quantum Dot Curved Monitor",
  model: "C27F390FHM",
  price: "$249",
  oldPrice: "$299",
  // usage: "Gaming / Office / Entertainment",
  specs: {
    "Screen Size": "27-inch (68.6 cm)",
    "Panel Type": "VA with Quantum Dot",
    // "Resolution": "1920 × 1080",
    "Refresh Rate": "60 Hz",
    // "Brightness": "250 cd/m²",
    // "Response Time": "4 ms",
    "Viewing Angle": "178°/178°",
    // "Curvature": "1800R",
    // "Color Support": "16.7 Million Colors",
    // "Contrast Ratio": "3000:1",
    "Ports": "HDMI, VGA, Headphone Out",
  },
  },
   {
    id: 4,
    img: off4,
    type: "Monitor",
   name: "Samsung 890 Series 34\" Curved Monitor",
  model: "C34H890WJN",
  price: "$776",         // Approx retail price (varies by region) :contentReference[oaicite:0]{index=0}
  oldPrice: "$815",      // Approx older/list price :contentReference[oaicite:1]{index=1}
  // usage: "Office / Productivity / Entertainment / Light Gaming",
  specs: {
    "Screen Size": "34-inch (86.4 cm)", 
    "Panel Type": "VA",
    // "Resolution": "3440 × 1440 (UW-QHD)",
    // "Refresh Rate": "100 Hz",
    // "Brightness": "300 cd/m² (Typical)",
    // "Response Time": "4 ms",
    // "Aspect Ratio": "21:9",
    "Curvature": "1800R",
    // "Color Support": "16.7 million",
    "Adaptive Sync": "AMD FreeSync",
    "Ports": "USB-C, HDMI, DisplayPort, USB 3.0 hub", 
    "Viewing Angle": "178°/178°",
  },
  },
   {
    id: 5,
    img: off5,
      name: "Apple iPhone 15 Pro Max",
  model: "A-Series (Natural Titanium)",
  price: "$1,199",         // Approx starting US retail price (varies by storage) :contentReference[oaicite:0]{index=0}
  oldPrice: "$1,299",      // Approx previous list price for higher storage SKU :contentReference[oaicite:1]{index=1}
  // usage: "Everyday / Professional / Creative / Gaming",
  specs: {
    "Display": "6.7-inch Super Retina XDR OLED with ProMotion (120 Hz)",
    // "Resolution": "2796 × 1290",
    // "Chipset": "Apple A17 Pro",
    "RAM": "8 GB",
    "Storage Options": "256 GB / 512 GB / 1 TB",
    // "Rear Cameras": "48 MP Main + 12 MP Ultra Wide + 12 MP Telephoto (5x optical zoom)",
    // "Front Camera": "12 MP TrueDepth",
    // "Battery": "Built-in Li-Ion (up to ~29 hrs video playback)",
    "Operating System": "iOS 17",
    // "Build": "Titanium frame with Ceramic Shield front",
    "Water Resistance": "IP68",
    // "Ports": "USB-C (USB 3), MagSafe Wireless Charging",
    // "Weight": "221 g",
    "Color": "Natural Titanium",
  },
  },
  {
    id: 6,
    img: off6,
    type: "Smartphone",
    name: "Apple iPhone 17 Pro",
  model: "A-Series (17 Pro)",
  price: "$1,099",           // Starting US retail price for base model (~256GB) :contentReference[oaicite:0]{index=0}
  oldPrice: "$1,199",        // Example previous suggested price for comparison (varies by region) :contentReference[oaicite:1]{index=1}
  // usage: "Everyday / Professional / Creative / Gaming",
  specs: {
    "Display": "6.3-inch Super Retina XDR OLED with ProMotion (120 Hz)",  // Peak brightness up to 3000 nits :contentReference[oaicite:2]{index=2}
    // "Resolution": "OLED (exact resolution not officially published)",
    // "Chipset": "Apple A19 Pro",  
    // "RAM": "12 GB (Estimated)",  
    "Storage Options": "256 GB / 512 GB / 1 TB",  // Confirmed available storage tiers :contentReference[oaicite:5]{index=5}
    // "Rear Cameras": "Triple 48 MP Pro Fusion system (Main + Ultra Wide + Telephoto, up to 8× optical zoom)",  // Pro camera improvements :contentReference[oaicite:6]{index=6}
    "Front Camera": "18 MP TrueDepth with Center Stage",  // Advanced front camera :contentReference[oaicite:7]{index=7}
    // "Battery": "Up to ~33 hrs video playback", 
    "Operating System": "iOS 26",
    // "Build": "Aluminum unibody with Ceramic Shield 2",  
    "Water Resistance": "IP68",
    // "Ports": "USB-C (10 Gbps), MagSafe Wireless Charging",
    "Connectivity": "5G, Wi-Fi 7, Bluetooth 6, eSIM support",
    // "Weight": "Approx ~206 g",  
    "Color Options": "Deep Blue, Cosmic Orange, Silver",  // Available finish choices :contentReference[oaicite:10]{index=10}
  },
  },
  {
    id: 7,
    img: off7,
   type: "Smartphone",
  name: "Samsung Galaxy S25 Ultra",
  model: "SM-S928B / SM-S928U",  // Global model codes
  price: "$1,299.99",             // Approx starting US retail price :contentReference[oaicite:0]{index=0}
  oldPrice: "$1,419.99",          // MSRP for higher storage variants :contentReference[oaicite:1]{index=1}
  // usage: "Everyday / Professional / Gaming / Photography",
  specs: {
    // "Display": "6.9-inch Dynamic AMOLED 2X, 1-120Hz",
    // "Resolution": "3120 × 1440 (WQHD+)",
    "Processor": "Qualcomm Snapdragon 8 Gen 4 Elite for Galaxy",
    "RAM": "12 GB / 16 GB",
    "Storage Options": "256 GB / 512 GB / 1 TB",
    // "Rear Cameras": "200 MP (main) + 50 MP (periscope, 5×) + 10 MP (telephoto, 3×) + 50 MP (ultrawide)",
    // "Front Camera": "12 MP",
    "Battery": "5000 mAh, 45 W wired, 15 W wireless, 4.5 W reverse wireless",
    // "Operating System": "Android 15, One UI 7",
    "Build": "Titanium frame with Gorilla Armor 2",
    "Water Resistance": "IP68",
    "Connectivity": "5G, Wi-Fi 7, Bluetooth 5.4, NFC, UWB",
    "Extras": "S Pen support, Galaxy AI features",
    // "Weight": "≈218 g",
    // "Colors": "Titanium Black, Titanium Gray, Titanium Silver Blue, Titanium White Silver",
    // "Display Brightness": "Up to 2600 nits",
  },
  },
   {
    id: 8,
    img: off8,
    type: "Laptop",
  name: "HP EliteBook 840 G5",
  model: "840 G5",
  price: "₨66,000",        // Approx price in Nepal (varies by config / condition) :contentReference[oaicite:0]{index=0}
  oldPrice: "₨99,000",     // Higher config used price estimate :contentReference[oaicite:1]{index=1}
  // usage: "Business / Office / Everyday",
  specs: {
    // "Display": "14.0-inch Full HD (1920 × 1080) IPS anti-glare",  // Common standard panel :contentReference[oaicite:2]{index=2}
    "Processor": "Intel 8th Gen Core i5-8350U / i7-8550U",        // Typical CPU options :contentReference[oaicite:3]{index=3}
    "RAM": "8 GB / 16 GB DDR4 (up to 32 GB)",                     // Expandable options :contentReference[oaicite:4]{index=4}
    "Storage": "256 GB / 512 GB PCIe NVMe SSD",                   // Common SSD options :contentReference[oaicite:5]{index=5}
    "Graphics": "Intel UHD Graphics 620 (integrated)",            // Integrated graphics :contentReference[oaicite:6]{index=6}
    "Operating System": "Windows 10 Pro / Windows 11",             // Typical OS :contentReference[oaicite:7]{index=7}
    "Battery": "3-cell, ~50 Wh Li-ion",                           // Standard battery :contentReference[oaicite:8]{index=8}
    // "Ports": "USB-C (Thunderbolt), USB-A, HDMI 1.4b, RJ-45 Ethernet, Headphone/Mic combo, Docking connector",  // Typical I/O :contentReference[oaicite:9]{index=9}
    // "Connectivity": "Wi-Fi 802.11ac, Bluetooth 4.2",              // Wireless support :contentReference[oaicite:10]{index=10}
    // "Security": "Fingerprint Reader, Optional IR Camera",         // Security features :contentReference[oaicite:11]{index=11}
    // "Audio": "Bang & Olufsen stereo speakers",                    // Audio branding :contentReference[oaicite:12]{index=12}
    // "Weight": "Approx ~1.48 kg",
    // "Build": "Aluminum chassis",
  },
  },
];

export default function ProductSlider() {
  const [center, setCenter] = useState(0);

  const prevIndex = (center - 1 + products.length) % products.length;
  const nextIndex = (center + 1) % products.length;

  const product = products[center];

  return (
    <section className="main-slider">
      <h3 className="slider-title">KUNYO BESTSELLERS</h3>

      <div className="carousel">
        {/* Left */}
        <div className="shoe-card left" onClick={() => setCenter(prevIndex)}>
          <img src={products[prevIndex].img} alt="" />
        </div>

        {/* Center */}
        <div className="shoe-card center">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Right */}
        <div className="shoe-card right" onClick={() => setCenter(nextIndex)}>
          <img src={products[nextIndex].img} alt="" />
        </div>
      </div>

      {/* DETAILS */}
      <div className="details">
        <h3>{product.name}</h3>
        <p className="model">Model: {product.model}</p>

        <p className="price">
          <span className="new">{product.price}</span>
          <span className="old">{product.oldPrice}</span>
        </p>

        <ul className="specs">
    {Object.entries(product.specs).map(([key, value]) => (
      <li key={key}>
        <strong>{key}:</strong> {value}
      </li>
    ))}
  </ul>


        <p className="usage">{product.usage}</p>

        <div className="buttons">
          <button className="primary">ADD TO CART</button>
          <button className="secondary">BUY NOW</button>
        </div>
      </div>
    </section>
  )
};