import PropTypes from 'prop-types';
import CloseButton from '../assets/images/close-icon.svg';

const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const hideModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  return (
    <div className='modal'>
      <div className='close-modal'>
        <img src={CloseButton} alt='close modal' onClick={hideModal} />
      </div>

      {/* If the state of animateModal is true add the animate class */}
      <form className={`form ${animateModal ? 'animate' : 'close'}`}>
        <legend>Nuevo Gasto</legend>
        <div className='field'>
          <label htmlFor='title'>Título</label>
          <input id='title' type='text' placeholder='Título' />
        </div>

        <div className='field'>
          <label htmlFor='amount'>Cantidad</label>
          <input id='amount' type='number' min={0} />
        </div>

        <div className='field'>
          <label htmlFor='category'>Categoría</label>
          <select id='category'>
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
