import React from "react";
import { Link } from "react-router-dom";
import FoodForm from "./FoodForm";

const Home = () => {
  return (
    <div>
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
        <div>
          <h3>Your Favortite Food Delivery, While Coding</h3>
          <div>
            <Link to="FoodForm">
                <button>Pizza!</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
