import { useState } from 'react';
import Proptypes from 'prop-types';
import Alert from './Alert';

const NewBudget = ({ budget, setBudget }) => {
  // Create alert state to validate form
  const [message, setMessage] = useState('');

  // Function that is executed when the user submits the form.
  const handleSubmit = e => {
    e.preventDefault();

    // Validate form
    if (!budget || budget <= 0) {
      setMessage('No es un presupuesto valido');
      return;
    }

    setMessage(''); // Remove error message if budget is valid
  };

  return (
    <div className='container budget-container shadow'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='field'>
          <label htmlFor='budget'>Crear Presupuesto</label>
          <input
            id='budget'
            type='number'
            className='new-budget'
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />
        </div>

        <input type='submit' value='Crear' />

        {message && <Alert type='error'>{message}</Alert>}
      </form>
    </div>
  );
};

NewBudget.propTypes = {
  budget: Proptypes.number.isRequired,
  setBudget: Proptypes.func.isRequired,
};

export default NewBudget;
