import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({ expenses, setEditExpense }) => {
  return (
    <div className='expense-list container'>
      <h2>{expenses.length ? 'Gastos' : 'No tiene Gastos'}</h2>

      {expenses.map(expense => (
        <Expense
          key={expense.id}
          expense={expense}
          setEditExpense={setEditExpense}
        />
      ))}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  setEditExpense: PropTypes.func.isRequired,
};

export default ExpenseList;
