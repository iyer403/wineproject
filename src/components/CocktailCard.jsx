import { Link, useOutletContext } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailCard = ({ item }) => {
  const data = useOutletContext();
  console.log(data);
  return (
    <Wrapper>
      <div className="img-container">
        <img src={item.strDrinkThumb} alt={item.strDrink} className="img" />
      </div>
      <div className="footer">
        <h4>{item.strDrink}</h4>
        <h5>{item.strGlass}</h5>
        <p>{item.strAlcoholic}</p>
        <Link to={`/cocktail/${item.idDrink}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
