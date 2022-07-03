import React from "react";
import { useWindowSize } from "../../hooks/useWindowsize";
import background1 from "../../images/illustration-editor-desktop.svg";
import background2 from "../../images/illustration-editor-mobile.svg";
import "./Features.scss";

export const Features = () => {
  const { width } = useWindowSize();
  return (
    <div className="features-container">
      <h1 className="feature-title">Designed for the future</h1>
      <div className="features-wrapper">
        <div className="features-wrapper_left">
          <div className="features-wrapper_left-item">
            <span className="features-wrapper_left-item-title">
              Introducing an extensible editor
            </span>
            <span className="features-wrapper_left-item-text">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </span>
          </div>
          <div className="features-wrapper_left-item">
            <span className="features-wrapper_left-item-title">
              Robust content management
            </span>
            <span className="features-wrapper_left-item-text">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </span>
          </div>
        </div>
        <div className="features-wrapper_right">
          <img
            src={width <= 375 ? background2 : background1}
            alt={width <= 375 ? 'background2' : 'background1'}
            className="wrapper_right-img"
          />
        </div>
      </div>
    </div>
  );
};
