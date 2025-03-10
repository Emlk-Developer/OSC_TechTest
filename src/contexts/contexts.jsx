import {createContext, useState, useContext, useEffect} from "react";
import { getData } from "../services/apiMockShopData";
const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductProvider({ children }) {
  useEffect( () => {
        
    const supermarketData = async() => {
        const data = await getData()
        setShopproducts(data)
    }
    supermarketData()
},[])

    const [shopProducts, setShopproducts] = useState();
    const [basket, setBasket] = useState([])
    const [notification, setNotification] = useState({status:false, message: ''});
    const formatCurrencyCode = {
      "CAD" : "$",
      "GBP" : "£",
      }

    const getformatCurrencyCode = (action)  => {
      return formatCurrencyCode[action];
    }


    return (
      <ProductContext.Provider value={{
          basket, setBasket, 
          notification, setNotification,
          getformatCurrencyCode,
          shopProducts
        }}
      >
          {children}
      </ProductContext.Provider>
    )
}

function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("ProductContext was used outside the ProductProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ProductProvider, useProduct };