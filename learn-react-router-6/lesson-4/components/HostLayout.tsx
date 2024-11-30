import { NavLink, Outlet } from "react-router-dom";
import styles from "./HostLayout.module.css";

const HostLayout = () => {
  return (
    <>
     <nav className={styles.hostNav}>
        <NavLink end className={({isActive}) => isActive ? `${styles.myLink}` : ''} to='.'>Dashboard</NavLink>
        <NavLink className={({isActive}) => isActive ? `${styles.myLink}` : ''} to='vans'>Vans</NavLink>
        <NavLink className={({isActive}) => isActive ? `${styles.myLink}` : ''} to='income'>Income</NavLink>
        <NavLink className={({isActive}) => isActive ? `${styles.myLink}` : ''} to='reviews'>Reviews</NavLink>
     </nav>
     <Outlet />
    </>
  )
}

export default HostLayout