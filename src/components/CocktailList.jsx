import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CockTailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    );
  }
  return (
     <Wrapper>
      {drinks.map((item) => (
       
          <CocktailCard key={item.idDrink} item={item} />
       
      ))}
    </Wrapper>
  );
};

export default CockTailList;
