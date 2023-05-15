import Proptypes from 'prop-types';
import NewBudget from './NewBudget';

const Header = ({ budget, setBudget, setBugetIsValid }) => {
  return (
    <header>
      <h1>Presupuestos React</h1>
      <NewBudget
        budget={budget}
        setBudget={setBudget}
        setBugetIsValid={setBugetIsValid}
      />
    </header>
  );
};

Header.propTypes = {
  budget: Proptypes.number.isRequired,
  setBudget: Proptypes.func.isRequired,
  setBugetIsValid: Proptypes.func.isRequired,
};

export default Header;
