import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
export const Login = () => {
    const [form, setForm] = useState([]);
    const { handleToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleChange = ({ target: { name, value } }) => {
        
        setForm({...form, [name]: value});
    }
    const handleClick = (e) => {
        e.preventDefault();
        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        },
        ).then(response => response.json()).then(response => handleToken(response.token),navigate(-1));
        // console.log(form
    }
    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" name="email" onChange={handleChange} placeholder="Username" /><br/>
                <input type="text" name="password" onChange={handleChange} placeholder="password" /><br />
                <input type="submit" />
            </form>
        </div>
    )
}