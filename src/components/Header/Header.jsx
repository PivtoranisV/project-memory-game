import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Memory Game</h1>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/game"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              New Game
            </NavLink>
          </li>
          <li>
            <NavLink
              to="setup"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Game Setup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
