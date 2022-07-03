import React from "react";
import footerBg from "../../images/logo.svg";
import { footerItems } from "../../utils/data";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={footerBg} alt="footerBg" className="footer-img" />
      <div className="footer-grid-container">
        {footerItems.map((item) => (
          <div className="footer-grid-item" key={item.id}>
              <div className="item-container">
              <span className="grid-item-title">{item.title}</span>
                {item.options.map((option)=>(
                    <span className="grid-item-option" key={option.name}>{option.name}</span>
                ))}
              </div>

          </div>
        ))}
      </div>
    </footer>
  );
};
