import React from "react";

const Step = ({ title, options, onSelect }) => {
  return (
    <div className="step">
      <div className="step-title">{title}</div>
      <div className="step-options">
        {options.map((option, index) => (
          <div
            key={index}
            className="step-option"
            onClick={() => onSelect(option.label)}
            onMouseEnter={() => console.log(option.label)}
          >
            {option.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;
