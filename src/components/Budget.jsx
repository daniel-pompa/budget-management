import PropTypes from 'prop-types';

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
          <span>0</span>
        </p>

        <p>
          Disponible: {''}
          <span>0</span>
        </p>

        <p>
          Presupuesto: {''}
          <span>{budget}</span>
        </p>
      </div>
    </div>
  );
};

Budget.propTypes = {
  budget: PropTypes.number.isRequired,
};

export default Budget;
