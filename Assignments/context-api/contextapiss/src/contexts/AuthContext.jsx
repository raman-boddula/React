import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState("Login");
    const toggleAuth = () => {
     setIsAuth(isAuth==="Login"?"Logout":"Login");
    }

    return (
        <AuthContext.Provider value={{isAuth,toggleAuth,setIsAuth}}>{children}</AuthContext.Provider>
    )
}