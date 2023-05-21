import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  leakedExpenses,
}) => {
  return (
    <div className='expense-list container'>
      {filter ? (
        <>
          <h2>{leakedExpenses.length ? 'Gastos' : 'No tiene Gastos'}</h2>
          {leakedExpenses.map(expense => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? 'Gastos' : 'No tiene Gastos'}</h2>
          {expenses.map(expense => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  setEditExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  leakedExpenses: PropTypes.array.isRequired,
};

export default ExpenseList;
