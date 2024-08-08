import React from "react";
import "./styles.css";

function CreateDropdown({ optionsArray, dropdownId }) {
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
