import { useLoaderData } from 'react-router-dom';
import CardsList from '../components/CardList/CardsList';
import Score from '../components/CardList/Score';

const DisneyPage = () => {
  const data = useLoaderData();
  const loadedData = data.data;

  return (
    <>
      <Score />
      <CardsList data={loadedData} />;
    </>
  );
};

export default DisneyPage;
