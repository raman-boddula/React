import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from "./components/counter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Counter initial={0}/>
      </header>
    </div>
  );
}

export default App;
