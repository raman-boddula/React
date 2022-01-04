import { createContext ,useState} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
   const [cart,setCart]= useState(10)
    const handle = (value) => {
       setCart(cart+value)
   }
    return <CartContext.Provider value={{cart,handle}}>
        { children}
    </CartContext.Provider>
}