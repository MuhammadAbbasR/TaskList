
import React from "react";

const Button = ({ text, onClick, color = "blue" }) => {
  return (
    <button
      className={`button ${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
