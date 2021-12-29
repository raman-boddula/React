import React from "react";

export const Todo = () => {
    const [text, setText] = React.useState("");
    const [todo, setTodo] = React.useState([]);

    React.useEffect(() => {
        getTodo()
    },[])
    const getTodo = () => {
        fetch("http://localhost:3001/todos").then(d=>d.json()).then(d=>setTodo(d))
    }
    const addTo = () => {
        const payload = {
            title: text,
            status: false,
        };
        console.log("payload",payload)
                    fetch("http://localhost:3001/todos", {
                        method: "POST",
                        body: JSON.stringify(payload),
                        headers: {
                            'Content-Type': 'application/json'
                        } 
                    })
                    getTodo()
    }
    return (
        <div>
                <input type="text" placeholder="enter something" onChange={(e) => {
                    setText(e.target.value)
                }} />
                <button onClick={addTo}>Todo</button>
            {todo.map((e, i) => (<div key={i}>  {e.title}</div>))}
        </div>
    )
}