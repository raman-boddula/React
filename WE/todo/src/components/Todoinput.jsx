import React from "react";

export const TodoInput = ({ getData }) => {
    const [text, setText] = React.useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleClick = () => {
        getData(text);
    }
    return (
        <>
            <input type="text" placeholder="type something" onChange={handleChange} />
            <button onClick={handleClick}>Add ToDo</button>
        </>
    );
}