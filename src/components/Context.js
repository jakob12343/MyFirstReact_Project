import React, { useState, createContext } from "react";
import axios from 'axios'
import searchImages from "./UnsplashApi";

const ShoppingContext = createContext()
const Provider = ({ children }) => {
  const [list, setlist] = useState([])

  const fetchProduct = async () => {
    const products = await axios.get('http://localhost:3000/Read')
    setlist(products.data)
  }



  const sharedobject = {
    fetchProduct,
    list
  }
  return (<ShoppingContext.Provider value={sharedobject}>
    {children}
  </ShoppingContext.Provider>)

}
export { Provider }
export default ShoppingContext
