import styles from './CardItem.module.css';

const CardItem = ({ image, description, onShuffle }) => {
  return (
    <li className={styles.card} onClick={onShuffle}>
      <div className={styles['card-image']}>
        <img src={image} alt={description} />
      </div>
    </li>
  );
};

export default CardItem;
