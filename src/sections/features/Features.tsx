import React from "react";
import { useWindowSize } from "../../hooks/useWindowsize";
import background1 from "../../images/illustration-editor-desktop.svg";
import background2 from "../../images/illustration-editor-mobile.svg";
import "./Features.scss";

interface IProps {
  id: string;
  title?: string;
  featueres: item[];
  mobileImg: string;
  desktopImg: string;
}
interface item {
  title: string;
  description: string;
}

export const Features = ({
  title,
  featueres,
  mobileImg,
  desktopImg,
}: IProps) => {
  const { width } = useWindowSize();
  return (
    <div className="features-container">
      {title && <h1 className="feature-title">{title}</h1>}
      <div className="features-wrapper">
        <div className="features-wrapper_left">
          <div className="features-wrapper_left-item">
            {featueres.map((item: item) => (
              <>
                <span className="features-wrapper_left-item-title">
                  {item.title}
                </span>
                <span className="features-wrapper_left-item-text">
                  {item.description}
                </span>
              </>
            ))}
          </div>
        </div>
        <div className="features-wrapper_right">
          <img
            src={width <= 375 ? mobileImg : desktopImg}
            alt={width <= 375 ? "background2" : "background1"}
            className="wrapper_right-img"
          />
        </div>
      </div>
    </div>
  );
};
