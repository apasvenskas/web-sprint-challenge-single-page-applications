import React from "react";
import { BrowserRouter } from "react-router-dom";
import PizzaForm from "./Components/pizzaForm";
import SouceRadio from "./Components/SouceRadio";
import ToppingsCheck from "./Components/ToppingsCheck";
import { useState } from "react";

 

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
          <PizzaForm />
        </div>
      </section>
      <section>
        <h3>Choice of Souce</h3>
        <div>
          <SouceRadio />
        </div>
      </section>
      <section>
        <h3>Choose your Toppings</h3>
        <div>
          <ToppingsCheck />
        </div>
      </section>
    </BrowserRouter>
  );
};
export default App;
