import React from "react";
import { useWindowSize } from "../../hooks/useWindowsize";
import background1 from "../../images/illustration-editor-desktop.svg";
import background2 from "../../images/illustration-editor-mobile.svg";
import "./Features.scss";

interface IProps {
  features: IFeatures;
}
interface IFeatures {
  id: string;
  title?: string;
  features: item[];
  mobileImg: string;
  desktopImg: string;
  classname:string;
  reverse?: boolean;
}
interface item {
  title: string;
  description: string;
}

export const Features = ({
  features: { id, title, features, mobileImg, desktopImg,classname ,reverse},
}: IProps) => {
  const { width } = useWindowSize();
  return (
    <div className={`features-container ${reverse && 'reverse'|| ''}`}>
      {title && <h1 className="feature-title">{title}</h1>}
      <div className={`features-wrapper ${reverse && 'reverse' || ''}`}>
        <div className="features-wrapper_left">
          <div className="features-wrapper_left-item">
            {features.map((item: item) => (
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
            className={classname}
          />
        </div>
      </div>
    </div>
  );
};
