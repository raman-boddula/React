import logo from './logo.svg';
import './App.css';
import {Range} from "./components/Range"
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
        <Range />   
      </header>
    </div>
  );
}

export default App;
