import React from "react";
import { useNavigate, useLocation ,useContext } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext"
export const Login = () => {
    const [form, setForm] = React.useState({});
    const location = useLocation();
    console.log(location);
    const handleChange = (e) => {
        let [name, value] = e.target;
        setForm({ ...form, [name]:value})
    }
    const {handleClick } =useContext(AuthContext)
    const onSubmit = () => {
        // alert('logged in')
        handleClick(123123)
    }
    return (
        <>
            <input type="text" placeholder="enter your email" /><br></br>
            <input  type="password" placeholder="enter your password"/>
            <button onClick={onSubmit}>Login</button>
        </>
    )
}