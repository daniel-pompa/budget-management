import Proptypes from 'prop-types';
import NewBudget from './NewBudget';

const Header = ({ budget, setBudget }) => {
  return (
    <header>
      <h1>Presupuestos React</h1>
      <NewBudget budget={budget} setBudget={setBudget} />
    </header>
  );
};

Header.propTypes = {
  budget: Proptypes.number.isRequired,
  setBudget: Proptypes.func.isRequired,
};

export default Header;
