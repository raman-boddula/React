import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children}) => {
    return (
        <AuthContextProvider>{children}</AuthContextProvider>
    )
}