import styles from './CardItem.module.css';

const CardItem = ({ image, description }) => {
  return (
    <li className={styles.card}>
      <div className={styles['card-image']}>
        <img src={image} alt={description} />
      </div>
    </li>
  );
};

export default CardItem;
