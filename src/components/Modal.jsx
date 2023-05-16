import { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import CloseButton from '../assets/images/close-icon.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  // Create state of expenses
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  // Create alert state to validate the form
  const [alert, setAlert] = useState('');

  // Function to close modal window
  const hideModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
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

    // TODO Save expense
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
        <legend>Nuevo Gasto</legend>
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

        <input type='submit' value='Crear' />
      </form>
    </div>
  );
};

Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  animateModal: PropTypes.bool.isRequired,
  setAnimateModal: PropTypes.func.isRequired,
};

export default Modal;
