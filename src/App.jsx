import { useState } from 'react';
import Header from './components/Header';

function App() {
  // Create budget state
  const [budget, setBudget] = useState(0);

  return (
    <div>
      <Header budget={budget} setBudget={setBudget} />
    </div>
  );
}

export default App;
