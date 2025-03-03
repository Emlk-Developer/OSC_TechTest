import {createContext, useState, useContext} from "react";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductProvider({ children }) {
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
          getformatCurrencyCode
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