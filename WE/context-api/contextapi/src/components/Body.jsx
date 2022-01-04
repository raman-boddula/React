import { Cart } from "./Cart"
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { Button } from 'antd';
export const Body = () => {
    const {handle}= useContext(CartContext)
    return (
        <div>
            <Button type="primary" onClick={() => {
                handle(1);
            }
            }>addtoCart</Button>
            <Cart />
        </div>
    )
}