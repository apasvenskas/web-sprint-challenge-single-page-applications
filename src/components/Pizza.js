import React, { useState } from "react";
import Dropdown from "../Parts/dropdown";
import SouceRadio from "../Parts/SouceRadio";
import ToppingsCheck from "../Parts/ToppingsCheck";
import SubCheck from "../Parts/SubCheck";
import OrderBox from "../Parts/OrderBox";
import NameInputs from "../Parts/name-input";
import { Link } from "react-router-dom";
import "./pizza-form.css";
import axios from "axios";
import { formSchema } from "../formSchema";
import * as yup from "yup";

const initialFormState = {
  name: "",
  size: "",
  hasPepperoni: false,
  hasMushroom: false,
  hasBannanaPepper: false,
  hasPineapple: false,
  specialText: "",
};

const initialErrorState = {
  name: "",
};

export default function Pizza(props) {
  const [formValues, setFormValues] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);

  const onChangeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setFormValues({
        ...formValues,
        [event.target.name]: !formValues[event.target.name],
      });
    } else {
      setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }

    if (event.target.name === "name") {
      yup
        .reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then((valid) => {
          setErrors({
            ...errors,
            [event.target.name]: "",
          });
        })
        .catch((err) => {
          setErrors({
            ...errors,
            [event.target.name]: err.errors[0],
          });
        });
    }
  };
  const onSubmitClicked = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/orders', {}).then((res => {
      console.log(res);
  }))
}


  return (
    <>
      <h1>Lambda Eats</h1>
      <form  id="pizza-form" onSubmit={onSubmitClicked}>
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
              <input
                name="name"
                onChange={onChangeHandler}
                value={formValues.name}
                id="name-input"
              />
              {errors.name && <p>{errors.name}</p>}
              {/* <NameInputs /> */}
            </div>
          </div>
          <div className="dropdown">
            <h3>Pizza Size</h3>
            <div>
              {/* <Dropdown /> */}
              <select
                name="size"
                value={formValues.size}
                id="size-dropdown"
                onChange={onChangeHandler}
              >
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
            <div>{/* <SouceRadio /> */}</div>
          </div>
          <div className="toppings">
            <h3>Choose your Toppings</h3>
            <div className="toppingsCheck">
              <input
                name="hasPepperoni"
                checked={formValues.hasPepperoni}
                type="checkbox"
              />
              Pepperoni
              <input
                name="hasMushroom"
                checked={formValues.hasMushroom}
                type="checkbox"
              />
              Mushroom
              <input
                name="hasHam"
                checked={formValues.hasHam}
                type="checkbox"
              />
              Ham
              <input
                name="hasBellPeppers"
                checked={formValues.hasBellPeppers}
                type="checkbox"
              />
              BellPeppers
              {/* <ToppingsCheck /> */}
            </div>
          </div>
          <div className="subChoise">
            <h3>Choice of Substitute</h3>
            <div>{/* <SubCheck /> */}</div>
          </div>
          <div className="special">
            <h3>Special Instructions</h3>
            <div>
              <input
                name="special-text"
                value={formValues.specialText}
                id="special-text"
                type="text"
                placeholder="If you have any special request let us know?"
              />
            </div>
          </div>
          <div className="submit-order">
            <h3>Submit Order</h3>
            <div>
              <div>
                {/* <Link to="/Pizza/Confirmation"> */}
                  <button id="order-button">Order</button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

// export default Pizza;
