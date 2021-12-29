import React from "react";

export const Form = () => {
    const [counter, setCounter] = React.useState(0);
    const [age, setAge] = React.useState(22);
    console.log("before UEF")
    React.useEffect(() => {
        console.log("first UEF")
    })
    React.useEffect(() => {
        console.log("second UEF")
        },[])
    React.useEffect(() => {
        console.log("third UEF")
    }, [age, counter])

    console.log("after UEF");
    
    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>INC</button>
            <h2>Age : {age}</h2>
            <button onClick={() => {
                setAge(age + 1);
            }}>Add Age</button>
        </div>
    )
}