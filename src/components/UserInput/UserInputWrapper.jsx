import styles from './UserInputWrapper.module.css';

const UserInputWrapper = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1>Setup your game</h1>
      {children}
    </div>
  );
};

export default UserInputWrapper;
