import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
//import PizzaForm from "./pizza-form";
//import img1 from "src\images\McD.jpg";

//const img1 = require("./images/McD.jpg")

const Home = () => {
  return (
    <div className="home">
      <h1>Lambda Eats</h1>
      <section className="heading">
        <div className="nav">
          <Link to="/">
            <button>Home</button>
          </Link>
          <button>Help</button>
        </div>
        <div className="pizza">
          <h2>Your Favortite Food Delivery, While Coding</h2>
          <Link to="/pizza-form">
            <button>Pizza!</button>
          </Link>
        </div>
      </section>
      <h3>Food Delivery in Gotham City</h3>
      <section className="main-body">
        <div className="McD">
          <img src="https://images.unsplash.com/photo-1587361144243-03f7925381ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="McDonalds" />
          <h4>McDonals</h4>
          <p>$, American fast food, burger.</p>
          <div>
            <p>20-30 Min</p>
            <p>$5.99 delivery fee</p>
          </div>
        </div>
        <div className="SweetGreen">
          <img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
          <h4>SweetGreen</h4>
          <p>$, Healthy, Salads</p>
          <div>
            <p>30-45 Min</p>
            <p>$4.99 delivery fee</p>
          </div>
        </div>
        <div className="Starbucks">
          <img src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" />
          <h4>Starbucks</h4>
          <p>$, Coffee tea, breakfest & brunch</p>
          <div>
            <p>10-20 Min</p>
            <p>3.99 delivery fee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
