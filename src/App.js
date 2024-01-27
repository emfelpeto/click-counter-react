import './App.css';
import {Button} from './components/Button';
import { useState } from 'react';

function App() {

  const addCounter = () => {
    setClickCounter(clickCounter + 1);
  };
  const subtractCounter = () => {
    if(clickCounter > 0) {
      setClickCounter(clickCounter - 1);
    }
  };
  const resetCounter = () => setClickCounter(0);
  const [clickCounter, setClickCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Click counter</h2>
      </header>
      <div className="counter-container">
        <div className='counter-box'>
          {clickCounter}
        </div>
        <div className='counter-buttons-box'>
          <Button
           text='+'
           counterHandler={addCounter} />
          <Button
           text='-' 
           counterHandler={subtractCounter} />
        </div>
        <div className='reset-box'>
          <Button text='Reset' counterHandler={resetCounter} />
        </div>
      </div>
    </div>
  );
}

export default App;
