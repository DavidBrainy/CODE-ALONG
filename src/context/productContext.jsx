import { createContext, useContext, useState } from "react";

export const ProductContext = createContext({
    product:[],
    setProducts:(products) => {},
});

export const ProductContextProvider = ({children}) => {
    const [products, setValue] = useState([])

   const setProducts = (products) => setValue(products)

    return (
    <ProductContext.Provider value={{products, setProducts }}> 
    {children} 
    </ProductContext.Provider>
    );
};

export const useProductContext = () => useContext (ProductContext);

