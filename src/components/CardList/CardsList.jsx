import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardItem from './CardItem';
import Button from '../UI/Button';
import styles from './CardList.module.css';
import { gameAction } from '../../store/game-slice';

const CardsList = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { topic, level, page } = useSelector((state) => state.input);

  const dispatch = useDispatch();
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
      setCards(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [level, page, topic]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleShuffle = (id) => {
    const shuffled = cards.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);

    dispatch(gameAction.click({ id }));
  };

  let content;

  if (!isLoading && cards.length === 0) {
    content = (
      <div className={styles.fallback}>
        <h1>Please, setup your game</h1>
        <Button onClick={handleNavigation}>Setup game</Button>
      </div>
    );
  }

  if (isLoading) {
    content = <h1 className={styles.fallback}>Loading...</h1>;
  }

  if (!isLoading && cards.length !== 0) {
    content = (
      <div>
        <ul>
          <li>Game Topic: {topic}</li>
          <li>Game Level: Memorize {level} images</li>
        </ul>
        <ul className={styles['cards-grid']}>
          {cards.map((card) => (
            <CardItem
              key={card.id}
              id={card.id}
              image={card.urls.regular}
              description={card.alt_description}
              onShuffle={handleShuffle}
            />
          ))}
        </ul>
      </div>
    );
  }

  if (!isLoading && error) {
    content = <h1 className={styles.fallback}>{error}</h1>;
  }

  return <>{content}</>;
};

export default CardsList;
