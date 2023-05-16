import { useState } from 'react';
import Header from './components/Header';
import NewExpenseIcon from './assets/images/new-expense-icon.svg';
import Modal from './components/Modal';

function App() {
  // Create budget state
  const [budget, setBudget] = useState(0);
  const [bugetIsValid, setBugetIsValid] = useState(false);

  // Create modal window state
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  // Function to generate a new expense
  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

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
            <img
              src={NewExpenseIcon}
              alt='new expense icon'
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {/* Display the modal component to generate a new expense */}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
    </div>
  );
}

export default App;
