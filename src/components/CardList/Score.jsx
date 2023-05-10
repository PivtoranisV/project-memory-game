import { useSelector } from 'react-redux';
import styles from './Score.module.css';

const Score = () => {
  const { score, bestScore } = useSelector((state) => state.game);

  return (
    <div className={styles.container}>
      <h2>
        Score: <span className={styles.score}>{score}</span>
      </h2>
      <h2>
        Best Score: <span className={styles.score}>{bestScore}</span>
      </h2>
    </div>
  );
};

export default Score;
