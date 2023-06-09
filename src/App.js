
import { Routes, Route, Link} from "react-router-dom";
import Confirmation from "./components/Confirmation";
import Home  from "./components/Home";
import  Pizza   from "./components/Pizza";



export default function App() {
  
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pizza" >Order</Link>
    </nav>
    
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza />} />
          {/* <Route path="/Pizza/Confirmation" element={<Confirmation />} /> */}
        </Routes>

    </>
  )
}

