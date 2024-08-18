import React from "react";
import "./styles.css";

/**
 * CreateDropdown Component
 *
 * This component renders a dropdown select element with options passed via props.
 * It handles the selection of an option and notifies the parent component when a selection is made.
 *
 * @param {Array} optionsArray - An array of objects representing the dropdown options. Each object should have value and label properties.
 * @param {string} dropdownId - A unique identifier for the select element
 * @param {Function} onChange - A function that is called when the user selects an option.
 */

function CreateDropdown({ optionsArray, dropdownId, onChange }) {
  /**
   * handleChange function
   *
   * This function is triggered when the user selects an option from the dropdown.
   * It finds the selected option from `optionsArray` using the value of the selected option
   * and then calls the `onChange` function with the selected option.
   *
   * @param {Object} event - The event object from the dropdown's onChange event.
   */

  const handleChange = (event) => {
    const selectedOption = optionsArray.find(
      (option) => option.value === event.target.value
    );
    onChange(selectedOption);
  };

  return (
    <div className="select-container">
      {/* The select element that renders the dropdown */}
      <select
        id={dropdownId}
        className="select-element"
        defaultValue="" // Makes sure that the "Select..." placeholder is displayed by default
        onChange={handleChange} // Add the handleChange function to the onChange event of the element
      >
        {/* The placeholder option, disabled to prevent selection */}
        <option value="" className="option-element" disabled>
          Select...
        </option>
        {/* Maps over the optionsArray to create an option element for each object in the array */}
        {optionsArray.map((option) => (
          <option
            key={option.value} //unique key for each option, needed for React
            value={option.value} //The value for each option
            className="option-element"
          >
            {/* The text that will be displayed for each option */}
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CreateDropdown;
