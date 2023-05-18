import PropTypes from 'prop-types';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatDate } from '../helpers';

import MoneySavingIcon from '../assets/images/money-saving-icon.svg';
import HomeIcon from '../assets/images/home-icon.svg';
import FoodIcon from '../assets/images/food-icon.svg';
import EducationIcon from '../assets/images/education-icon.svg';
import LeisureIcon from '../assets/images/leisure-icon.svg';
import VariousIcon from '../assets/images/expenses-icon.svg';
import HealthIcon from '../assets/images/health-icon.svg';
import SubscriptionsIcon from '../assets/images/subscriptions-icon.svg';
import MortgageIcon from '../assets/images/mortgage-icon.svg';
import LoansIcon from '../assets/images/loans-icon.svg';
import InsurancesIcon from '../assets/images/insurances-icon.svg';
import TravelsIcon from '../assets/images/travels-icon.svg';
import TransportIcon from '../assets/images/transport-icon.svg';

const iconDictionary = {
  ahorro: MoneySavingIcon,
  hogar: HomeIcon,
  comida: FoodIcon,
  educacion: EducationIcon,
  ocio: LeisureIcon,
  varios: VariousIcon,
  salud: HealthIcon,
  suscripciones: SubscriptionsIcon,
  hipoteca: MortgageIcon,
  prestamos: LoansIcon,
  seguros: InsurancesIcon,
  viajes: TravelsIcon,
  transporte: TransportIcon,
};

const Expense = ({ expense, setEditExpense, deleteExpense }) => {
  const { title, amount, category, date, id } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='expense shadow'>
          <div className='expense-content'>
            <img src={iconDictionary[category]} alt='expense icon' />
            <div className='expense-description'>
              <p className='expense-category'>{category}</p>
              <p className='expense-title'>{title}</p>
              <p className='expense-date'>{formatDate(date)}</p>
            </div>
          </div>
          <p className='expense-amount'>{amount}€</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
  setEditExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default Expense;
