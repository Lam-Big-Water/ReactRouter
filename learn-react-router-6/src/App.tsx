import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import Details from "./pages/Vans/Details";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

import styles from './App.module.css';
import Layout from "./components/Layout";



const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Details />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
