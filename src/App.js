import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import PizzaForm from "./Pages/pizza-form";
import Confirmation from "./Pages/Confirmation";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/pizza-form" element={<PizzaForm />} />
          <Route path="/pizza-form/Confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

