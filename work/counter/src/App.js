import logo from './logo.svg';
import React from "react"
import './App.css';

import {Task} from "./Task"

function App() {
  const [counter,setCounter]=React.useState(0);
  const IncrementValue = (value) => {
    setCounter(counter+value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <h1>Counter</h1>
      <h1>{counter}</h1>
      <button className='btn' onClick={ ()=> IncrementValue(1)}>+</button>
      <button className='btn' onClick={ ()=> IncrementValue(-1)}>-</button>
      </header>
    </div>,
    <div>
        <Task/>
    </div>
  );
}


export default App;
