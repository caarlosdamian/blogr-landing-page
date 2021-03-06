import React from "react";
import "./Button.scss";

interface IButtonProps {
  label: string;
  theme: "primary" | "secondary" | 'thirdary';
}

export const Button = ({ label, theme }: IButtonProps) => {
  return <button className={`button ${theme}`}>{label}</button>;
};
