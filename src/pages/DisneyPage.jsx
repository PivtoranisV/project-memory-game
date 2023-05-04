import { useLoaderData } from 'react-router-dom';
import CardsList from '../components/CardList/CardsList';

const DisneyPage = () => {
  const data = useLoaderData();
  const loadedData = data.data;

  return <CardsList data={loadedData} />;
};

export default DisneyPage;
