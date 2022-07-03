import React, { useState } from "react";
import logo from "../../images/logo.svg";
import background from "../../images/bg-pattern-intro-desktop.svg";
import arrowup from "../../images/icon-arrow-light.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

import "./Header.scss";
import { navbarItems } from "../../utils/data";
import { Button } from "../../components/button/Button";
import { Box } from "../../components/box/Box";
import { useWindowSize } from "../../hooks/useWindowsize";
import { NavbarBox } from "../../components/navbarBox/NavbarBox";

export const Header = () => {
  const [active, setactive] = useState({ active: false, name: "" });
  const [show, setShow] = useState(false);
  const { width } = useWindowSize();
  return (
    <>
      {show && <NavbarBox setactive={setactive} active={active} />}

      <div className="header-container">
        <img src={background} alt="background" className="header-backgroud" />
        <div className="header-top-container">
          <img src={logo} alt="logo" className="header-logo" />

          {width <= 375 ? (
            <img
              onClick={() => setShow(!show)}
              src={show ? close : hamburger}
              alt="hamburger"
              className="header-hamburger"
            />
          ) : (
            <div className="header-top-container_wrapper">
              <div className="header-top-container_wrapper-left">
                {navbarItems.map((item) => (
                  <div
                    className="item-arrow-container"
                    onClick={() =>
                      setactive({ active: !active.active, name: item.name })
                    }
                    key={Math.random()}
                  >
                    <span
                      className={`navbaritem ${
                        active.name === item.name && active.active && "active"
                      }`}
                      key={item.id}
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
                    {item.option &&
                      active.name === item.name &&
                      active.active && <Box options={item.option} />}
                  </div>
                ))}
              </div>
              <div className="header-top-container_wrapper-right">
                <span className="header-right-label">Login</span>
                <Button label="Sign Up" theme="primary" />
              </div>
            </div>
          )}
        </div>

        <div className="header-middle-container">
          <h1 className="header-middle-title">A modern publishing platform</h1>
          <span className="header-middle-subtitle">
            Grow your audience and build your online brand
          </span>
          <div className="header-middle-container-buttons">
            <Button label="Start  for Free" theme="primary" />
            <Button label="Learn More" theme="secondary" />
          </div>
        </div>
      </div>
    </>
  );
};
