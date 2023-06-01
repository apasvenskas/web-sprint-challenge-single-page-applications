import React from "react";

export default function pizzaForm(props) {
  const { values, order } = props;

  return (
    <form className="form_container">
      <label>
        Size
        <select onChange={onchange} value={values.size} name="size">
          <option values="">Select an Option</option>
          <option values="small">10" Small</option>
          <option values="medium">12" Medium</option>
          <option values="large">14" Large</option>
          <option values="x-large">16" X-Large</option>
        </select>
       
      </label>
    </form>
  );
}



/*import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown__menu-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
*/
