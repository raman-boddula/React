import React from "react";
import { Timer } from "./Timer";


export const Range = () => {
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(0);
    const [value, setValue] = React.useState(false);
    const setChange = (e) => {
        const { name, value } = e.target;
        name === "start" ? setStart(value) : setEnd(value);
    }
    const setRange = (e) => {
       if(!start||!end) return (<h5>Please enter a valid start end end point</h5>)
        setValue(!value)
        console.log('start and end', start, end)
        return(<Timer start={start} end={end} />)
    }

    return (
        <>
            <label>Start-Time</label>
            <input type="number" onChange={setChange} name="start" />
            <label>End-Time</label>
            <input type="number" onChange={setChange} name="end" />
            <button onClick={setRange}>SET</button>
            {value ? <Timer start={start} end={end} />:null}
        </>
    )
}