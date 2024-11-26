import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <Link className={styles.siteLogo} to="/">#VanLife</Link>

        <nav>
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
  )
}

export default Header