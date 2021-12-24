import logo from './logo.svg';
import React from "react"
import './App.css';

import {Task} from "./Task"

function App() {
  const [counter,setCounter]=React.useState(0);
  const IncrementValue = (value) => {
    // setCounter(counter+value)
    if (setCounter((prev) => {
      if (prev === 10) {
        return 0;
      }
      return prev + value;
    }));
  }
  if (counter > 10) {
    return (
      <div>Counter has reached maximum value</div>
    )
   }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <h1>Counter</h1>
      <h1>{counter}</h1>
      <button className='btn' onDoubleClick={()=> IncrementValue(2)} onClick={ ()=> IncrementValue(1)}>+</button>
        <button className='btn' onDoubleClick={()=> IncrementValue(-2)}onClick={() => IncrementValue(-1)}>-</button>
        <div>counter is { counter %2===0 ?"Even":"Odd"}</div>
      </header>
    </div>,
    <div>
        <Task/>
    </div>
  );
}


export default App;
