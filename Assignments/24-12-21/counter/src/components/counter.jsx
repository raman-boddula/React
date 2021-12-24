import React from "react";


export default function Counter({initial}) {
    const [counter, setCounter] = React.useState(initial);
  const Addfunc = (value) => {
    if (value === 2) { 
      setCounter(counter * value);
      return;
    }
        setCounter(counter + value);
    }

  return (
    <div>
          <h1>Counter</h1>  
          <h1>{counter}</h1>
        <button onClick={()=>Addfunc(1)}> <h1> &emsp;+ &emsp;</h1>  </button> 
        &nbsp;<button onClick={()=>Addfunc(-1)}> <h1>&emsp; -&emsp; </h1> </button>  
          <div>Counter is { counter % 2===0 ? "Even" :"Odd"}</div>
      
      <button onClick={()=>Addfunc(2)} ><h1>Double</h1></button>
      </div>
  );
}

