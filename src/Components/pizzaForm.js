import React, { useState } from "react";


const PizzaForm= () => {
  //const { values, order } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); 

const options = [
  { id: "", name: "Select an option" },
  { id: "small", name: `10" Small` },
  { id: "medium", name: `12" Medium` },
  { id: "large", name: `14" Large` },
  { id: "X-Large", name: `16" X-Large` }
];

const toggleDropdown = () => setIsOpen(!isOpen);

const handleOptionClick = (option) => {
  setSelectedOption(option);
  setIsOpen(false);
};

  return (
    <form>
    <div className="form_container">
      <button onClick={toggleDropdown} className="dropdown">
        {selectedOption ? selectedOption.name : "Selected an option"}
      </button>
      {isOpen && (
        <ul className="dropdown_list">
          {options.map((option) => (
            <li 
              key={option.id} 
              onClick={() => handleOptionClick(option)} 
              className="list-item"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
    </form>
  );
};

export default PizzaForm; 


/*Size
<select onChange={onchange} value={values.size} name="size">
  <option values="">Select an Option</option>
  <option values="small">10" Small</option>
  <option values="medium">12" Medium</option>
  <option values="large">14" Large</option>
  <option values="x-large">16" X-Large</option>
</select>
*/
