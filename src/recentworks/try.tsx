import React from "react";
import "./Try.css";

const Try: React.FC = () => {
  const slides = [
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
    { id: 3, text: "Slide 3" },
    { id: 4, text: "Slide 4" },
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Original Slides */}
        {slides.map((slide) => (
          <div className="slide" key={`original-${slide.id}`}>
            {slide.text}
          </div>
        ))}
        {/* Duplicate Slides for Seamless Loop */}
        {slides.map((slide) => (
          <div className="slide" key={`duplicate-${slide.id}`}>
            {slide.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Try;
