import { Link } from 'react-router-dom';
import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className={styles.title__ready}>Ready,</span>
        <span className={styles.title__set}>Set,</span>
        <span className={styles.title__memorize}>Memorize!</span>
      </h1>
      <div className={styles.text}>
        <p>
          Welcome to the ultimate memory challenge! Unleash your brain&apos;s
          potential and put your memory to the test with our one-of-a-kind game.
        </p>
        <p>
          Begin by{' '}
          <Link className={styles.link} to="/setup">
            selecting
          </Link>{' '}
          a topic for the images and your preferred difficulty level. With
          different topics and levels to choose from, you&apos;ll always have a
          new challenge to tackle.
        </p>
        <h3 className={styles.subtitle}>Game Rules</h3>
        <p>
          Once the game starts, you&apos;ll be presented with a set of images
          that will shuffle after each click. Your mission: remember which
          images you&apos;ve clicked and avoid clicking any image twice. One
          wrong move, and it&apos;s game over. Do you have what it takes to
          conquer this memory test? Click the link to{' '}
          <Link className={styles.link} to="/setup">
            set up your game
          </Link>{' '}
          and embark on a journey that will stretch your mind and sharpen your
          memory. Think different, and have a blast!
        </p>
      </div>
    </div>
  );
};

export default Content;
