import PropTypes from 'prop-types';
import { formatAmount } from '../helpers';

const Budget = ({ budget }) => {
  return (
    <div className='budget-container container shadow two-columns'>
      {/* TODO Display the Graphics component here */}
      <div>
        <h2>Gráfico</h2>
      </div>

      <div className='budget-content'>
        <p>
          Gastado: {''}
          <span>{formatAmount(0)}</span>
        </p>

        <p>
          Disponible: {''}
          <span>{formatAmount(0)}</span>
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
  budget: PropTypes.number.isRequired,
};

export default Budget;
