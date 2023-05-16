import PropTypes from 'prop-types';
import { formatDate } from '../helpers';

const Expense = ({ expense }) => {
  const { title, amount, category, date } = expense;

  return (
    <div className='expense shadow'>
      <div className='expense-content'>
        <div className='expense-description'>
          <p className='expense-category'>{category}</p>
          <p className='expense-title'>{title}</p>
          <p className='expense-date'>
            Fecha: {''}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <p className='expense-amount'>{amount}€</p>
    </div>
  );
};

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default Expense;
