import axios, { Axios } from 'axios';
import { useLoaderData, Link, Navigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, drinks: data.drinks };
};

const Cocktail = () => {
  const { id, drinks } = useLoaderData();
  if (!drinks) return <Navigate to="/" />;

  console.log(drinks);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back Home
        </Link>
        <h3>{drinks[0].strDrink}</h3>
      </header>
      <div className="drink">
        <img src={drinks[0].strDrinkThumb} alt="name" className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {drinks[0].strDrink}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {drinks[0].strCategory}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {drinks[0].strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {drinks[0].strGlass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {drinks[0].strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
