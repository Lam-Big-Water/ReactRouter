import { useState } from "react";
import {NavLink, useRoutes, Navigate} from "react-router-dom";

import styles from './style.module.css';

import Products from './Products';
import Admin from './Admin/Admin';


const AppWrapper = () => {

  return (
    <div className={styles.app}>
      <Nav />
      <App />
      
    </div>
  )
}

const App = () => {
  const [authenticated] = useState(true);
  const routes = useRoutes([
    {
      path: '/*',
      element: <Products />
    },
    {
      path: '/admin/*',
      element: authenticated ? <Admin /> : <Navigate to='/' />
    },
    {
      path: '*',
      element: <Navigate to='/' />
    }
  ]);
  return routes;
}

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to='/'>Products</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
    </nav>
  )
}







export default AppWrapper