import { useState } from 'react';
import Header from './components/Header';

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
    </div>
  );
}

export default App;
