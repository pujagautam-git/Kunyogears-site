import React, { useState, useEffect } from "react";
import "./HeroSlider.css";
import hero1  from "../../assets/Hero/banner1.webp";
import hero2 from "../../assets/Hero/image1.png";
import hero3 from "../../assets/Hero/image2.png";
import hero4 from "../../assets/Hero/image3.png";

const images = [hero1,hero2,hero3,hero4];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
     const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? images.length - 1 : current - 1);
  // };

  // const nextSlide = () => {
  //   setCurrent((current + 1) % images.length);
  // };

  return (
     <div className="hero-slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
