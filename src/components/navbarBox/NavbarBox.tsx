import React from "react";
import { navbarItems } from "../../utils/data";
import { Button } from "../button/Button";
import arrowup from "../../images/icon-arrow-dark.svg";
import "./NavbarBox.scss";

interface NavbarBoxProps {
  active: { active: boolean; name: string };
  setactive: (active: { active: boolean; name: string }) => void;
}

export const NavbarBox = ({ active, setactive }: NavbarBoxProps) => {
  const test = () => {
    console.log("test");
  };
  return (
    <div className="navbarBox-container">
      <div className="navbar-box-top_container">
        <ul className="navbarbox-list">
          {navbarItems.map((item) => (
            <>
              <li className="navbarbox-item" key={Math.random()}>
                <span
                  className={`navbaritem ${
                    active.name === item.name && active.active && "active"
                  }`}
                  key={item.id}
                  onClick={() =>
                    setactive({ active: !active.active, name: item.name })
                  }
                >
                  {item.name}
                </span>
                <img
                  src={arrowup}
                  alt="arrow up"
                  className={`navbar-arrow ${
                    active.name === item.name && active.active && "active"
                  }`}
                />
              </li>
              {active.name === item.name && active.active && (
                <div className="options-navbox-container">
                  {item.option?.map((option) => (
                    <span className="options-navbox" key={option.name}>
                      {option.name}
                    </span>
                  ))}
                </div>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="navbar-box-bottom_container">
        <span className="header-right-label">Login</span>
        <Button label="Sign Up" theme="thirdary" />
      </div>
    </div>
  );
};
