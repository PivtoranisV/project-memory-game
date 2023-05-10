import styles from './CardItem.module.css';

const CardItem = ({ image, description, onShuffle, id }) => {
  const handleClick = () => {
    onShuffle(id);
  };

  return (
    <li className={styles.card} onClick={handleClick}>
      <div className={styles['card-image']}>
        <img src={image} alt={description} />
      </div>
    </li>
  );
};

export default CardItem;
