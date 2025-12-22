import React, { useState, useEffect } from "react";
import menuData from "../../data/menuData";
import "./MegaSubmenu.css";

const MegaSubmenu = ({ category }) => {
  const categoryData = menuData[category];

  const [activeSub, setActiveSub] = useState(
    categoryData.subCategories[0]
  );

  // 🔥 Reset submenu when category changes
  useEffect(() => {
    setActiveSub(categoryData.subCategories[0]);
  }, [category]);

  return (
    <div className="mega-wrapper">
      <div className="mega-inner">

        {/* SUB CATEGORY TABS */}
        <div className="mega-tabs">
          {categoryData.subCategories.map((sub) => (
            <button
              key={sub.key}
              className={activeSub.key === sub.key ? "active" : ""}
              onMouseEnter={() => setActiveSub(sub)}
            >
              {sub.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mega-content">

          {/* LEFT */}
          <div className="mega-left">
            {activeSub.leftList.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          {/* CENTER */}
          <div className="mega-center">
            {activeSub.columns.map((col, i) => (
              <div className="mega-column" key={i}>
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
{activeSub.promo && (
  <div className="mega-right">
    <div className="promo-large">
      <img
        src={activeSub.promo.image}
        alt={activeSub.promo.title}
      />

      <span>{activeSub.promo.tag}</span>
      <h2>{activeSub.promo.title}</h2>
      <p>{activeSub.promo.desc}</p>
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default MegaSubmenu;
