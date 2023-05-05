import styles from './Score.module.css';

const Score = () => {
  return (
    <div className={styles.container}>
      <h2>
        Score: <span className={styles.score}>0</span>
      </h2>
      <h2>
        Best Score: <span className={styles.score}>0</span>
      </h2>
    </div>
  );
};

export default Score;
