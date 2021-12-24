import React from "react";


export default function Counter() {
    const [counter, setCounter] = React.useState(0);
    const Addfunc = (value) => {
        setCounter(counter + value);
    }
    const Mulfunc = (value) => {
     setCounter(counter*value)   
    }
  return (
    <div>
          <h1>Counter</h1>  
          <h1>{counter}</h1>
        <button onClick={()=>Addfunc(1)}> <h1> &emsp;+ &emsp;</h1>  </button> 
        &nbsp;<button onClick={()=>Addfunc(-1)}> <h1>&emsp; -&emsp; </h1> </button>  
          <div>Counter is { counter % 2===0 ? "Even" :"Odd"}</div>
      
      <button onClick={()=>Mulfunc(2)} ><h1>Double</h1></button>
      </div>
  );
}

