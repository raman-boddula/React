export const GroceryList = ({ id, title, Toggle }) => {
    return (
        <>
            <div>{title}</div>
            <button onClick={()=>Toggle(id)}>Purchased</button>
        </>
    )
}