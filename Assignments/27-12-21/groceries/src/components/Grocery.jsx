import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";

export const Add = () => {
    const [list, setList] = useState([]);
    const handleClick = (data) => {
    const payload = {
        title: data,
        id: nanoid(8)
    }
    setList([...list, payload]);
};
const Toggle = (id) => {
    setList(list.filter((el)=> {
    return el.id !== id;
    }))
}
    return (
        <>
        < GroceryInput getData={handleClick} />
    {
        list.map((e, i) => (
            <GroceryList {...e} key={i} Toggle={Toggle} />
        ))}
    </>)
};