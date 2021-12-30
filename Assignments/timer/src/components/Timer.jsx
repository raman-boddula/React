import React from "react";
export const Timer = ({start,end }) => {
    const [counter, setCounter] = React.useState( end  -  start );
    // console.log("start,end",start,end,end-start)
    const [startNow, setStartNow] = React.useState({ start });
    const [endNow, setEndNow] = React.useState({ end });
    // console.log("startNow,endNow",{startNow},{endNow})
    React.useEffect(() => {
        let id = setInterval(() => {
            setCounter((p) => {
                if (p === 0)
                {
                    clearInterval(id);
                    return 0;
                }
                    return p - 1;    
            })
        }, 1000)
        return () => {
            console.log("Unmounting state")
            clearInterval(id);
        }
    },[])
    return (
        <>

            <h1>Counter:{counter}sec</h1>
        </>
    )

}