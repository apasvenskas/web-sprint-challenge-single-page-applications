import React from "react";
//import { BrowserRouter } from "react-router-dom";
import Dropdown from "../Components/dropdown";
import SouceRadio from "../Components/SouceRadio";
import ToppingsCheck from "../Components/ToppingsCheck";
import SubCheck from "../Components/SubCheck";
import OrderBox from "../Components/OrderBox";
import NameInputs from "../Components/name-input";
import { Link } from "react-router-dom";
import "./pizza-form.css";

const PizzaForm = () => {
  const onChangeHandler = (event) => {
    console.log("1", event.target)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  

  return (
    <>
      <h1>Lambda Eats</h1>
      <form id="pizza-form" onSubmit={onSubmitHandler}>
        <section className="pizza-form">
          <div className="heading">
            <div className="nav">
              <Link to="/">
                <button>Home</button>
              </Link>
              <button>Help</button>
            <div className="create">
              <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" />
              <p>Create Your Own Pizza</p>
            </div>
            </div>
          </div>
          <div className="nameInput">
            <h3>Name Input</h3>
            <div>
              <input id="name-input" />
              {/* <NameInputs /> */}
            </div>
          </div>
          <div className="dropdown">
            <h3>Pizza Size</h3>
            <div>
              {/* <Dropdown /> */}
              <select id="size-dropdown" onChange={onChangeHandler} name="size" >
                <option value="">Select a Size</option>  
                <option value="small">Small</option>  
                <option value="medium">Medium</option>  
                <option value="large">Large</option>  
                <option value="x-large">x-Large</option>  
              </select> 
            </div>
          </div>
          <div className="souce">
            <h3>Choice of Souce</h3>
            <div>
              {/* <SouceRadio /> */}
            </div>
          </div>
          <div className="toppings">
            <h3>Choose your Toppings</h3>
            <div className="toppingsCheck">
              <input type="checkbox" />Pepperoni
              <input type="checkbox" />Mushroom
              <input type="checkbox" />Ham
              <input type="checkbox" />BellPeppers
              {/* <ToppingsCheck /> */}
            </div>
          </div>
          <div className="subChoise">
            <h3>Choice of Substitute</h3>
            <div>
              {/* <SubCheck /> */}
            </div>
          </div>
          <div className="special">
            <h3>Special Instructions</h3>
            <div >
              <input id="special-text"
                type="text"
                placeholder="If you have any special request let us know?"
              />
            </div>
          </div>
          <div className="submit-order">
            <h3>Submit Order</h3>
            <div>
              
              <div>
                <Link to="/pizza-form/Confirmation">
                  <button>submit Order</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default PizzaForm;
