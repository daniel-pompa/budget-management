import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import { generateID } from './helpers';
import NewExpenseIcon from './assets/images/new-expense-icon.svg';

function App() {
  // Create budget state
  const [budget, setBudget] = useState(0);
  const [bugetIsValid, setBugetIsValid] = useState(false);

  // Create modal window state
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  /* Expense state
  It starts as an empty array and will be filled with the data entered in the modal window form of the Modal.jsx component */
  const [expenses, setExpenses] = useState([]);

  // Function to generate a new expense
  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

  // Function to save expenses
  const saveExpense = expense => {
    expense.id = generateID();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
    console.log(expense);
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
          saveExpense={saveExpense}
        />
      )}
    </div>
  );
}

export default App;
