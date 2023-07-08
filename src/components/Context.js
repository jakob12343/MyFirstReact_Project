import React, { useState, createContext } from "react";
import axios from 'axios'

const ShoppingContext = createContext()
const Provider = ({ children }) => {
  const [list, setlist] = useState([])

  

  const fetchProduct = async () => {
    const products = await axios.get('http://localhost:3000/Read')
    setlist(products.data)
  }


    const addToServer = async (item, url)=>{
        await axios.put(`http://localhost:3000/${url}`, item);
        fetchProduct();
    }

    const addListProduct = async (items) =>{

  const sharedobject = {
    fetchProduct,
    list, setlist
  }
  return (<ShoppingContext.Provider value={sharedobject}>
    {children}
  </ShoppingContext.Provider>)

   

}
export { Provider }
export default ShoppingContext
