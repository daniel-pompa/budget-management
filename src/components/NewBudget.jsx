import Proptypes from 'prop-types';

const NewBudget = ({ budget, setBudget }) => {
  return (
    <div className='container budget-container shadow'>
      <form className='form'>
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
      </form>
    </div>
  );
};

NewBudget.propTypes = {
  budget: Proptypes.number.isRequired,
  setBudget: Proptypes.func.isRequired,
};

export default NewBudget;
