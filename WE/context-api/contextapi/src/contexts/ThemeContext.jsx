import { createContext, useState } from "react";
export const ThemeContext = createContext();
export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState("light");
    const toggle = () => {
        setTheme(theme==="light"?"dark":"light");
    }
    return (
        <ThemeContextProvider value={{ theme, toggle }}>
            { children}
        </ThemeContextProvider>
    )

}