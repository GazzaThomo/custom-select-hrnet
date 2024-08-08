import React from "react";
import "./styles.css";

function CreateDropdown({ optionsArray, dropdownId, onChange }) {
  const handleChange = (event) => {
    const selectedOption = optionsArray.find(
      (option) => option.value === event.target.value
    );
    onChange(selectedOption);
  };

  return (
    <div className="select-container">
      <select id={dropdownId} className="select-element" defaultValue="">
        <option value="" className="option-element" disabled>
          Select...
        </option>
        {optionsArray.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="option-element"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CreateDropdown;
