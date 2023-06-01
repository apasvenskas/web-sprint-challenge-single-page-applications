import React from "react";
import { BrowserRouter } from "react-router-dom";
import pizzaForm from "./pizzaForm";
import { useState } from "react";

function Dropdown(){
  const[isOpen, setIsOpen] = useState(false); 
  const[selectedOption]= useState(null);
  const options = pizzaForm
  const toggleDropdown = () => setIsOpen(!isOpen);
}

const App = () => {
  return (
    <BrowserRouter>
      <h1>Lambda Eats</h1>
      <section className="heading">
        <div>
          <p>Create Your Own Pizza</p>
        </div>
        <div>
          <button>Home</button>
          <button>Help</button>
        </div>
      </section>
      <section>
        <h3>Pizza Size</h3>
        <div>
          <button className="dropdown"></button>
        </div>
      </section>
    </BrowserRouter>
  );
};
export default App;
