import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";

export const Navbar = () => {
    const { theme, toggle } = useContext(ThemeContext)
    return (
        <>
        <div>Navbar is {theme} now in navbar</div>,
        <button onClick={toggle}>Change Theme</button>
        </>
    )
}