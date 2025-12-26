import React from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../../Components/Heroslider/Heroslider.jsx'
import first from "../../assets/menudata/4.png"
import second from "../../assets/menudata/2.png"
import third from "../../assets/menudata/12.png"
import fourth from "../../assets/menudata/3.png"
import Category from '../../Components/Category/Category.jsx'
import ProductSlider from '../../Components/ProductSlider/ProductSlider.jsx'
import "./Home.css"
import MobileDeals from '../../Components/Mobile Deals/Mobile Deals.jsx'
const cards = [
  {
    id: 1,
    title: "SMARTPHONES",
    img: first,
    //  bg: "linear-gradient(135deg, #ff6a00, #ee0979)"
     bg: "linear-gradient(40deg, #2ccdf9ff, #0e488fff)"

  },
  {
    id: 2,
    title: "PICK YOUR LAPTOP",
    img: second,
      bg: "linear-gradient(135deg, #2ccdf9ff, #0e488fff)"
    //   bg: "linear-gradient(135deg, #ff6a00, #ee0979)"

  },
  {
    id: 3,
    title: "GAMING CHAIRS",
    img: third,
    //  bg: "linear-gradient(135deg, #ba6f14ff, #ffd200)"
    //   bg: "linear-gradient(135deg, #ff6a00, #ee0979)"
     bg: "linear-gradient(360deg, #2ccdf9ff, #0e488fff)"

  },
  {
    id: 4,
    title: "HOT DEALS",
    img: fourth,
    // bg: "linear-gradient(135deg, #11998e, #6bde97ff)"
     bg: "linear-gradient(135deg, #00c6ff, #0f4e9cff)"
    //   bg: "linear-gradient(135deg, #ff6a00, #ee0979)"

  },
];

const Home = () => {
  return (
    <>
    <HeroSlider/>
     <div className="sale-section">
      <div className="sale-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className="sale-card"
             style={{ background: card.bg }}>
            {/* // className={`sale-card ${active === card.id ? "active" : ""}`} */}
            {/* onClick={() => setActive(card.id)} */}
          
            <img src={card.img} alt={card.title} className="sale-image" />

            <div className="sale-content">
              <h3>{card.title}</h3>

              {/* {active === card.id && ( */}
                <div className="sale-buttons">
                   <Link to ="/new"><button>Buy Now</button></Link>
                 <Link to ="/new-arrival"> <button>View Details</button></Link>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    <ProductSlider/>
    <Category/>
    <MobileDeals/>
    
    </>
  )
}


export default Home