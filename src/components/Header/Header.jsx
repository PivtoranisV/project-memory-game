import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Memory Game</h1>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Disney Game</a>
          </li>
          <li>
            <a href="#">Game setup</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
