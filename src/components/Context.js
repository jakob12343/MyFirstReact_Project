import React, { useState, createContext } from "react";
import axios from 'axios'

const ShoppingContext = createContext()
const Provider = ({ children }) => {
  const [list, setlist] = useState([])
  const [Item, setItem]=useState({})
const [image , setimage]=useState()
  

  const fetchProduct = async () => {
    const products = await axios.get('http://localhost:3000/Read')
    setlist(products.data)
  }


   const ItemToUpdate=(item, image)=>{

    setItem(item)
    setimage(image)
   }
  

  const sharedobject = {
    fetchProduct,
     setlist,
     ItemToUpdate,
     list,
     Item,
     image
  }
  return (<ShoppingContext.Provider value={sharedobject}>
    {children}
  </ShoppingContext.Provider>)

   

}
export { Provider }
export default ShoppingContext
