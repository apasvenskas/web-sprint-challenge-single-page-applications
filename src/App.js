import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import FoodForm from "./Pages/FoodForm";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/FoodForm" element={<FoodForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

