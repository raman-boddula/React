import React from "react";
import { Timer } from "./Timer";
import "./Time.css"
export const Range = () => {
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(0);
    const [value, setValue] = React.useState(false);
    const [show, setShow] = React.useState(false);    
    const setChange = (e) => {
        const { name, value } = e.target;
        name === "start" ? setStart(Number(value)) : setEnd(Number(value));
    }
    const setRange = (e) => {
        if (!start && !end) return alert("Enter a valid timings");
        setValue(!value)
        // console.log('start and end', start, end);
    }

    return (
        <>
            <label>Start-Time</label>
            <input type="number" onChange={setChange} name="start" />
            <label>End-Time</label>
            <input type="number" onChange={setChange} name="end" />
            <button className='btnn' onClick={setRange}>SET</button>
            {show&&value ? <Timer start={start} end={end} />:null}
            <button className='btnn' onClick={() => setShow(!show)}>{ show ?"HIDE":"SHOW" }</button>
        </>
    )
}