import React from "react";

export const Counter = () => {
    const [counter, setCounter] = React.useState(15);
    React.useEffect(() => {
        const id = setInterval(() => {
            setCounter((p) => {
                if (p === 0) {
                    clearInterval(id)
                    return 0;
                }
                return p - 1;
            });
        }, 1000)
        return () => {
            console.log("unmounting")
            clearInterval(id)
        }
        
    },[])
    return (
        <>
            <h1>counter: {counter }</h1>
        </>
    )
} 