import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    const isAuth = () => {
        return;
    }
    const toggleAuth = () => {
        return;
    }

    return (
        <AuthContextProvider value={{isAuth,toggleAuth}}>{children}</AuthContextProvider>
    )
}