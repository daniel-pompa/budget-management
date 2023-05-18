import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import CloseButton from '../assets/images/close-icon.svg';

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense,
}) => {
  // Create state of expenses
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');

  // Create alert state to validate the form
  const [alert, setAlert] = useState('');

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
      setDate(editExpense.date);
      setId(editExpense.id);
    }
  }, [editExpense]);

  // Function to close modal window
  const hideModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);

    /* Clear the state when closing the modal window */
    setEditExpense({});
  };

  // Function that is executed when the user submits the form.
  const handleSubmit = e => {
    e.preventDefault();

    // Validate form
    if ([title, amount, category].includes('')) {
      setAlert('Todos los campos son obligatorios');

      setTimeout(() => {
        setAlert('');
      }, 3000);

      return;
    }

    if (amount <= 0) {
      setAlert('La cantidad tiene que ser mayor que cero');

      setTimeout(() => {
        setAlert('');
      }, 3000);

      return;
    }

    // Save expense
    saveExpense({ title, amount, category, date, id });
  };

  return (
    <div className='modal'>
      <div className='close-modal'>
        <img src={CloseButton} alt='close modal' onClick={hideModal} />
      </div>

      {/* If the state of animateModal is true add the animate class */}
      <form
        onSubmit={handleSubmit}
        className={`form ${animateModal ? 'animate' : 'close'}`}
      >
        <legend>{editExpense.title ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        {alert && <Alert type='error'>{alert}</Alert>}
        <div className='field'>
          <label htmlFor='title'>Título</label>
          <input
            id='title'
            type='text'
            placeholder='Título'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className='field'>
          <label htmlFor='amount'>Cantidad</label>
          <input
            id='amount'
            type='number'
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>

        <div className='field'>
          <label htmlFor='category'>Categoría</label>
          <select
            id='category'
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value=''>Seleccionar</option>
            <option value='ahorro'>Ahorro</option>
            <option value='hogar'>Hogar</option>
            <option value='comida'>Comida</option>
            <option value='educacion'>Educación</option>
            <option value='ocio'>Ocio</option>
            <option value='varios'>Varios</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
            <option value='hipoteca'>Hipoteca</option>
            <option value='prestamos'>Préstamos</option>
            <option value='seguros'>Seguros</option>
            <option value='viajes'>Viajes</option>
            <option value='transporte'>Transporte</option>
          </select>
        </div>

        <input
          type='submit'
          value={editExpense.title ? 'Guardar Cambios' : 'Crear'}
        />
      </form>
    </div>
  );
};

Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  animateModal: PropTypes.bool.isRequired,
  setAnimateModal: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.object.isRequired,
  setEditExpense: PropTypes.func.isRequired,
};

export default Modal;
