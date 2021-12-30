import React from "react";

export const Timer = ({start,end }) => {
    const [counter, setCounter] = React.useState({ start: start, end: end });
    
    React.useEffect(() => {
        let id = setInterval(() => {
            setCounter((p) => {
                if (p === { end })
                {
                    clearInterval(id);
                    return 0;
                }
                if (start < end)
                {
                    return p + 1;
                }
                if (start > end)
                {
                    return p + 1;    
                }
            })
        }, 1000)
        return () => {
            console.log("Unmounting state")
            clearInterval(id);
        }
    },[])
    return (
        <>
            <h1>Counter:{counter}</h1>
        </>
    )

}