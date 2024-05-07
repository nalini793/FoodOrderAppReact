import { createContext, useContext } from "react";

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

const ShoppingCartContext = createContext({});

export function ShoppingCartProvider() {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
}
