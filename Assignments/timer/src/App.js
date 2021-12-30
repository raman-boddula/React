import logo from './logo.svg';
import './App.css';
import { Range } from "./components/Range";
import {Timer} from "./components/Timer"
import React from "react";
function App() {
  const [show, setShow] = React.useState();
  return (
    <div className="App">
      <header className="App-header">
        <Range />
        {show ? <Timer /> : null}
        <button onClick={()=>setShow(!show)}>{show ? "Hide" : "show"}</button>
      </header>
    </div>
  );
}

export default App;
