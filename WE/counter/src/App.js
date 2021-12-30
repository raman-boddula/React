import logo from './logo.svg';
import './App.css';
import React from "react";
import {Counter} from './components/counter'
function App() {
  const [show,setShow]=React.useState()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {show ? <Counter />:null}
        <button onClick={()=>setShow(!show)}>{show ? "Hide" : "show"}</button>
      </header>
    </div>
  );
}

export default App;
