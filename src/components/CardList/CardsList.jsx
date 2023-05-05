import styles from './CardList.module.css';

const CardsList = ({ data }) => {
  return (
    <>
      <ul className={styles['cards-grid']}>
        {data.map((card) => (
          <li key={card._id} className={styles.card}>
            <div className={styles['card-image']}>
              <img src={card.imageUrl} alt={card.name} />
            </div>
            <h2 className={styles['card-title']}>{card.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardsList;
