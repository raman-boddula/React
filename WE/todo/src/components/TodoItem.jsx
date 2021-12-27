export const TodoItem = ({ id,title ,ToggleFun}) => {
    return (
        <>
            <div>{title}</div>
            <button onClick={()=>ToggleFun(id)}>Completed</button>
        </>
    )
};