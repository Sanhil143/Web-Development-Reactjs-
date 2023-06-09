import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => {
      const cart = useContext(cartContext);
      return cart;
}
export const CartProvider = (props) => {
      const [items,setItems] = useState([]);
      return(
            <cartContext.Provider value={{items,setItems}}>
                  {props.children}
            </cartContext.Provider>
      )
}