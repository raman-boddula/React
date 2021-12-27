import React from 'react';
import { TodoInput } from "./Todoinput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {
    const [list, setList] = React.useState([]);
    const handleClick = (data) => {
        const payload = {
            title: data,
            status: false,
            id:nanoid(8)
        }
        setList([...list, payload]);
    };
    const ToggleFun = (id) => {
        setList(list.filter((el) => {
           return el.id!==id
        }))
    }
    return (
        <>
            <TodoInput getData={handleClick} />
            {
                list.map((e,i) => (
                    <TodoItem {...e} key={i} ToggleFun={ToggleFun} />
                ))}
        </>)
};