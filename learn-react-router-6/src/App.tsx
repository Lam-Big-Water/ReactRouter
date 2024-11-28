import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import Details from "./pages/Vans/Details";

import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostVans from "./pages/Host/HostVans";
import HostVansDetail from "./pages/Host/HostVansDetail";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";

import styles from './App.module.css';
import Layout from "./components/Layout";
import HostVansInfo from "./pages/Host/HostVansInfo";
import HostVansPrice from "./pages/Host/HostVansPrice";
import HostVansPhoto from "./pages/Host/HostVansPhoto";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Details />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVansInfo />}/>
              <Route path="pricing" element={<HostVansPrice />}/>
              <Route path="photos" element={<HostVansPhoto />}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
