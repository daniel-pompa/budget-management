import { useState } from 'react';
import Header from './components/Header';
import NewExpenseIcon from './assets/images/new-expense-icon.svg';

function App() {
  // Create budget state
  const [budget, setBudget] = useState(0);
  const [bugetIsValid, setBugetIsValid] = useState(false);

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        bugetIsValid={bugetIsValid}
        setBugetIsValid={setBugetIsValid}
      />

      {/* When the budget is valid, the icon to create a new expense is displayed */}
      {bugetIsValid && (
        <>
          <main>{/* TODO Display ExpenseList component */}</main>
          <div className='new-expense'>
            <img src={NewExpenseIcon} alt='new expense icon' />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
