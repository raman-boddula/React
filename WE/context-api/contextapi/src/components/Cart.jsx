import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const {cart} = useContext(CartContext);
    return (
        <>Number of items in cart :{ cart}</>
    )
}