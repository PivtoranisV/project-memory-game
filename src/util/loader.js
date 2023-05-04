import { json } from 'react-router-dom';

export async function loader() {
  const response = await fetch(
    'https://api.disneyapi.dev/character?pageSize=12&page=132'
  );
  if (!response.ok) {
    throw json({ message: 'Could not fetch list of specialists' });
  } else {
    return response;
  }
}
