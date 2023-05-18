import { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import Modal from './components/Modal';
import { generateID } from './helpers';
import NewExpenseIcon from './assets/images/new-expense-icon.svg';

function App() {
  /* Expenses state
  It starts as an empty array and will be filled with the data entered in the modal window form of the Modal.jsx component */
  const [expenses, setExpenses] = useState([]);

  // Create budget state
  const [budget, setBudget] = useState(0);
  const [bugetIsValid, setBugetIsValid] = useState(false);

  // Create modal window state
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  /* State to edit expense
  It starts as an empty object and will be filled with the data entered in the modal window form of the Modal.jsx component */
  const [editExpense, setEditExpense] = useState({});

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 300);
    }
  }, [editExpense]);

  // Function to generate a new expense
  const handleNewExpense = () => {
    setModal(true);
    setEditExpense({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

  // Function to save expenses
  const saveExpense = expense => {
    if (expense.id) {
      // Update an expense
      const updatedExpenses = expenses.map(currentExpense =>
        currentExpense.id === expense.id ? expense : currentExpense
      );

      setExpenses(updatedExpenses);
    } else {
      // Create new expenditure
      expense.id = generateID();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  return (
    <div className={modal ? 'fixed' : null}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        bugetIsValid={bugetIsValid}
        setBugetIsValid={setBugetIsValid}
      />

      {/* When the budget is valid, the icon to create a new expense is displayed */}
      {bugetIsValid && (
        <>
          <main>
            <ExpenseList expenses={expenses} setEditExpense={setEditExpense} />
          </main>
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
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      )}
    </div>
  );
}

export default App;
