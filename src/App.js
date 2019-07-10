import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstDiceResult, setFirstDiceResult] = useState(1)
  const [secondDiceResult, setSecondDiceResult] = useState(6)

  const firstImage = require(`./assets/${firstDiceResult}.png`)
  const secondImage = require(`./assets/${secondDiceResult}.png`)

  function rollDice() {
    setFirstDiceResult(Math.floor(Math.random() * 6) + 1)
    setSecondDiceResult(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', margin: 20}}>
          <img src={firstImage} className="dice" alt="Dice One" />
          <img src={secondImage} className="dice" alt="Dice Two" />
        </div>
        <span>{ firstDiceResult + secondDiceResult }</span>
        <button className="button" onClick={rollDice}>Roll</button>
      </header>
    </div>
  );
}

export default App;
