import axios, { Axios } from 'axios';
import { useLoaderData } from 'react-router-dom';
import CockTailList from '../components/CockTailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  const { data } = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CockTailList drinks={drinks} />
    </>
  );
};
export default Landing;
