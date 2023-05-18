/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatAmount } from '../helpers';

const Budget = ({ expenses, budget }) => {
  // State for available and spent balance
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const initialValue = 0;
    /* Executes a reducer function for each element of the expense array and returns a single value with the total amount spent as a result */
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      initialValue
    );

    // Total balance available in budget
    const totalAvailable = budget - totalSpent;

    setSpent(totalSpent);
    setAvailable(totalAvailable);
  }, [expenses]);

  return (
    <div className='budget-container container shadow two-columns'>
      <div>
        <CircularProgressbar value={0} />
      </div>

      <div className='budget-content'>
        <p>
          Gastado: {''}
          <span>{formatAmount(spent)}</span>
        </p>

        <p>
          Disponible: {''}
          <span>{formatAmount(available)}</span>
        </p>

        <p>
          Presupuesto: {''}
          <span>{formatAmount(budget)}</span>
        </p>
      </div>
    </div>
  );
};

Budget.propTypes = {
  expenses: PropTypes.array.isRequired,
  budget: PropTypes.number.isRequired,
};

export default Budget;
