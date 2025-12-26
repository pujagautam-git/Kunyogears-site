import React, { useState, useEffect } from "react";
import menuData from "../../data/menuData";
import "./MegaSubmenu.css";

const MegaSubmenu = ({ category }) => {
  
   const getSubCategories = () => {
    if (category !== "All Categories") {
      return menuData[category]?.subCategories || [];
    }

    return Object.entries(menuData).flatMap(
      ([mainCategory, data]) =>
        data.subCategories.map((sub) => ({
          ...sub,
          mainCategory,
        }))
    );
  };

   const subCategories = getSubCategories();

  const [activeSub, setActiveSub] = useState(subCategories[0]);
  
  
  useEffect(() => {
    setActiveSub(subCategories[0]);
  }, [category]);

  return (
    <div className="mega-wrapper">
      <div className="mega-inner">


{category === "All Categories" ? (
  <div className="all-cat-wrapper">

    {/* LEFT MENU */}
    <div className="all-cat-left">
      {Object.entries(menuData).map(([mainCategory, data]) => (
        <div key={mainCategory} className="all-cat-group">
          <h4>{mainCategory}</h4>

          {data.subCategories.map((sub) => (
            <div
              key={sub.key}
              className="all-cat-item"
              onMouseEnter={() => setActiveSub(sub)}
            >
              {sub.label}
            </div>
          ))}
        </div>
      ))}
    </div>

   {/* RIGHT CONTENT */}
<div className="all-cat-right">
  {activeSub && (
    <>
      <h3 className="all-cat-title">{activeSub.label}</h3>

      <div className="all-cat-right-row">
        {/* LEFT LIST */}
        <div className="mega-left">
          {activeSub.leftList.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        {/* CENTER COLUMNS */}
        <div className="mega-center">
          {activeSub.columns.map((col, i) => (
            <div key={i} className="mega-column">
              <h4>{col.title}</h4>
              <ul>
                {col.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )}
</div>


  </div>
) : (
  <>
  <div className="mega-tabs">
    {subCategories.map((sub) => (
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

            <div className="mega-left">
              {activeSub.leftList.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>

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

            {activeSub.promo && (
              <div className="mega-right">
                <div className="promo-large">
                  <img src={activeSub.promo.image} alt={activeSub.promo.title} />
                  <span>{activeSub.promo.tag}</span>
                  <h2>{activeSub.promo.title}</h2>
                  <p>{activeSub.promo.desc}</p>
                </div>
              </div>
            )}

          </div>
        </>
      )}



      </div>
    </div>
  );
};

export default MegaSubmenu;
