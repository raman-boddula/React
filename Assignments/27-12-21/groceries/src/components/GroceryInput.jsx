import { useState } from "react";

export const GroceryInput = ({ getData }) => {
    const [item, setItem] = useState("");
    const handleChange = (e) => {
        // console.log(e)
        setItem(e.target.value);
    };
    const handleClick = () => {
        getData(item);
    }
    return (
        <>
            <input class="inputPart" type="text" placeholder="Add grocery list here" onChange={handleChange} />
            <button class="btn" onClick={handleClick} >Add To Bucket</button>
        </>
    )
}