import React from "react";
import background3 from "../../images/illustration-phones.svg";
import background4 from "../../images/bg-pattern-circles.svg";
import "././Middle.scss";

export const Middle = () => {
  return (
    <div className="middle-container">
      <div className="middle-wrapper">
      <img src={background4} alt="background4" className="img-bg" />
        <div className="middle-wrapper-left">
          <img
            src={background3}
            alt="background3"
            className="middle-img-back"
          />
        
        </div>
        <div className="middle-wrapper-right">
        <img src={background4} alt="background4" className="img-bg-mobile" />
          <span className="middle-wraper-title">
            State of the Art Infrastructure
          </span>
          <span className="middle-wraper-text">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </span>
        </div>
      </div>
    </div>
  );
};
