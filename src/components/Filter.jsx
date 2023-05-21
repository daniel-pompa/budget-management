import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className='filters shadow container'>
      <form>
        <div className='field'>
          <label htmlFor='filter'>Filtrar Gastos</label>
          <select
            id='filter'
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value=''>Categorías</option>
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
      </form>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
