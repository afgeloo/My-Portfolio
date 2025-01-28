import React, { } from "react";
import './CircleButton.css';

interface CircleButtonProps {
  onClick: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = ({ onClick }) => {
  return (
    <button className="circle-button" onClick={onClick}>
      <span>+</span>
    </button>
  );
};

export default CircleButton;
