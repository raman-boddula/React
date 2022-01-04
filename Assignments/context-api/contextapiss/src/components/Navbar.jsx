import React from "react";
import { FormInput } from "./FormInput";
import { Button } from "antd";
import { AuthContext } from "../contexts/AuthContext";
export const Navbar = () => {

    const [formStatus, setFormStatus] = React.useState("false");
    const { isAuth,setIsAuth } = React.useContext(AuthContext);
    const toggle = () => {
        if (isAuth === "Logout") {
            setIsAuth("Login")
         }
        setFormStatus(formStatus==="false" ? "true":"false");
    }
    return (
        <>
            <Button onClick={toggle} type="primary">{isAuth}</Button>
            {formStatus==="true" ? <FormInput />:null}
        </>
    )
}