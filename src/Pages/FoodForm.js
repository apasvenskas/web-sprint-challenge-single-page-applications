import React from "react";
//import { BrowserRouter } from "react-router-dom";
import PizzaForm from "../Components/pizzaForm";
import SouceRadio from "../Components/SouceRadio";
import ToppingsCheck from "../Components/ToppingsCheck";
import SubCheck from "../Components/SubCheck";
import OrderBox from "../Components/OrderBox";
import { Link } from "react-router-dom";

const FoodForm = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      <section className="heading">
        <div>
          <p>Create Your Own Pizza</p>
        </div>
        <div>
          <Link to="Home">
            <button>Home</button>
          </Link>
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
      <section>
        <h3>Choice of Substitute</h3>
        <div>
          <SubCheck />
        </div>
      </section>
      <section>
        <h3>Special Instructions</h3>
        <div>
          <input
            type="text"
            placeholder="Anything else you would like to add?"
          />
        </div>
      </section>
      <section>
        <h5>submit Order</h5>
        <div>
          <OrderBox />
        </div>
      </section>
      </>
  );
};

export default FoodForm;
