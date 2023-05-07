import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardItem from './CardItem';
import Button from '../UI/Button';
import styles from './CardList.module.css';

const CardsList = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { topic, level, page } = useSelector((state) => state.input);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/setup');
  };

  const getData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&per_page=${level}&query=${topic}&client_id=dW_Mvso_DJ0821wHBkgJB557AmKANwpA8MoI6vDOS3w`
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      console.log(data.results);
      setCards(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [level, page, topic]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {!isLoading && cards.length === 0 && (
        <div className={styles.fallback}>
          <h1>Please, setup your game</h1>
          <Button onClick={handleNavigation}>Setup game</Button>
        </div>
      )}
      {isLoading && <h1 className={styles.fallback}>Loading...</h1>}
      {!isLoading && error && <h1 className={styles.fallback}>{error}</h1>}
      {!isLoading && (
        <div>
          <ul>
            <li>
              Game Topic:{' '}
              {topic[0].toUpperCase() + topic.slice(1).toLowerCase()}
            </li>
            <li>Game Level: Memorize {level} images</li>
          </ul>
          <ul className={styles['cards-grid']}>
            {cards.map((card) => (
              <CardItem
                key={card.id}
                image={card.urls.regular}
                description={card.alt_description}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CardsList;
