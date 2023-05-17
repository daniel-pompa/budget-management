import Proptypes from 'prop-types';
import NewBudget from './NewBudget';
import Budget from './Budget';

const Header = ({
  expenses,
  budget,
  setBudget,
  bugetIsValid,
  setBugetIsValid,
}) => {
  return (
    <header>
      <h1>Presupuestos React</h1>
      {/* Display the Budget component or the NewBudget component */}
      {bugetIsValid ? (
        // The budget is valid
        <Budget expenses={expenses} budget={budget} />
      ) : (
        // The budget is not valid
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setBugetIsValid={setBugetIsValid}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  expenses: Proptypes.array.isRequired,
  budget: Proptypes.number.isRequired,
  setBudget: Proptypes.func.isRequired,
  bugetIsValid: Proptypes.bool.isRequired,
  setBugetIsValid: Proptypes.func.isRequired,
};

export default Header;
