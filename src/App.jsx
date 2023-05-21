import { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import Modal from './components/Modal';
import { generateID } from './helpers';
import NewExpenseIcon from './assets/images/new-expense-icon.svg';
import Filter from './components/Filter';

function App() {
  /* Expenses state
  It starts with expenses stored in localStorage or with an empty array and will be filled with the data entered in the modal window form of the Modal.jsx component */
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses')) || []
  );

  // Create budget state
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) || 0
  );
  const [bugetIsValid, setBugetIsValid] = useState(false);

  // Create modal window state
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  /* State to edit expense
  It starts as an empty object and will be filled with the data entered in the modal window form of the Modal.jsx component */
  const [editExpense, setEditExpense] = useState({});

  // State to filter expenses
  const [filter, setFilter] = useState('');
  const [leakedExpenses, setLeakedExpenses] = useState([]);

  // Update expenses
  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 300);
    }
  }, [editExpense]);

  // Changes in filtering
  useEffect(() => {
    if (filter) {
      // Filter expenses by category
      const leakedExpenses = expenses.filter(
        expense => expense.category === filter
      );

      setLeakedExpenses(leakedExpenses);
    }
  }, [expenses, filter]);

  // Budget at LocalStorage
  useEffect(() => {
    localStorage.setItem('budget', budget || 0);
  }, [budget]);

  // If the budget has been defined
  useEffect(() => {
    const localStorageBudget = Number(localStorage.getItem('budget'));

    if (localStorageBudget > 0) {
      setBugetIsValid(true);
    }
  }, []);

  // Expenses at LocalStorage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

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
      /* Clear the state */
      setEditExpense({});
    } else {
      // Create new expense
      expense.id = generateID();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  // Function to delete expenses
  const deleteExpense = id => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
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
            <Filter filter={filter} setFilter={setFilter} />
            <ExpenseList
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              filter={filter}
              leakedExpenses={leakedExpenses}
            />
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
