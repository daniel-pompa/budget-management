import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({ expenses }) => {
  return (
    <div className='expense-list container'>
      <h2>{expenses.length ? 'Gastos' : 'No tiene Gastos'}</h2>

      {expenses.map(expense => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ExpenseList;
