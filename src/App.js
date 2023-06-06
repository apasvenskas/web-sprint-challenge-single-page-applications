import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Pizza from "./Pages/Pizza";
import Confirmation from "./Pages/Confirmation";
import axios from "axios";



export default function App() {
  const [useEffect, setUseEffect] = useState('')
  const [order, setOrder] = useState('')
  return (
    <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Pizza" element={<Pizza />} />
          <Route path="/Pizza/Confirmation" element={<Confirmation />} />
        </Routes>

    </div>
  )
}

