import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ steps, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => {
    if (currentIndex < steps.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-content"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {steps.map((step, index) => (
          <div className="carousel-step" key={index}>
            {step}
          </div>
        ))}
      </div>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Carousel;
