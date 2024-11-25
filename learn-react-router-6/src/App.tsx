import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";


const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
    </div>
  )
}


const Nav = () => {
  return (
    <nav>
      <Link to='/'>#VanLife</Link>
      <Link to='/about'>About</Link>
      <Link to='/vans'>Vans</Link>
    </nav>
  )
}

export default App