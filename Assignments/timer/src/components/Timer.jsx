import React from "react";
export const Timer = ({start,end }) => {
    const [counter, setCounter] = React.useState(start);
    React.useEffect(() => {
        let id = setInterval(() => {
            setCounter((p) => {
                if (p === end)
                {
                    clearInterval(id);
                    return p=end;
                }
                if (start > end) {
                    return p - 1;    
                } else {
                    return p + 1;
                }
            })
        }, 1000)
        return () => {
            console.log("Unmounting state")
            clearInterval(id);
        }
    })
    return (
        <>
            <h1>Counter:{counter}sec</h1>
        </>
    )

}