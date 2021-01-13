import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/SignUp" className="btn-mobile">
      <button
        type={type}
        onClick={onclick}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      >
        {children}
      </button>
    </Link>
  );
};
