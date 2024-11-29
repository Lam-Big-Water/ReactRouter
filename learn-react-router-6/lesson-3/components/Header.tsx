import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

  return (
    <header className={styles.header}>
        <NavLink className={styles.siteLogo} to="/">#VanLife</NavLink>

        <nav>
          <NavLink to="/host" className={({isActive}) => isActive ? `${styles.myLink}` : ''}>Host</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? `${styles.myLink}` : ''}>About</NavLink>
          <NavLink to="/vans" className={({isActive}) => isActive ? `${styles.myLink}` : ''}>Vans</NavLink>
        </nav>
      </header>
  )
}

export default Header