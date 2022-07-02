import React from "react";
import { option } from "../../interfaces";
import "./Box.scss";

interface IBoxProps {
  options: option[];
}

export const Box = ({ options }: IBoxProps) => {
  return (
    <div className="box-container">
      <ul className="box-list">
        {options.map((option) => (
          <li className="box-list-item" key={option.id}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
