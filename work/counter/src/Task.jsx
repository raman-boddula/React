import React from "react"

function Task() {


    const [query, setQuery] = React.useState("");
    const [tasks, setTasks] = React.useState([]);
    const handleQuery = (e) => {
        const { value } = e.target;
        setQuery(value)
        console.log(value);
    }
    const addTo = () => {
        const payload = {
            title: query,
            status:false,
        }
        let newTasks = [...tasks, payload];
        setTasks(newTasks);
    }
    return(
    <div>
    <h1>Tasks</h1>
    <div>
      <input value ={query} onChange={handleQuery} placeholder='type something' />
        </div>
        <button onClick={()=>addTo()}>Add</button>
        <div> 
            {
                tasks.map((item) =>
                { 
                    return <div>{item.title}</div>
                })}
             </div>
            </div>
            )
        }
export {Task}