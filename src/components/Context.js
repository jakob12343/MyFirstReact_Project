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

    const builProduct = async (item) => {
        const image = await searchImages(item.Brand);
        item.image = image[0].urls.small;
      
        const payload = {
          Brand: item.Brand,
          engine: item.engine,
          category: item.category,
          min_price: item.minprice,
          max_price: item.maxprice,
          kilometer_scale: item.kilometerscale,
          uniuqe_id: item.uniuqe_id,
          image: item.image,
        };
      
        try {
          await axios.put('http://localhost:3000/Update', payload);
          fetchProduct();
        } catch (error) {
          console.error(error);
          // Handle the error
        }
      };
      

    const sharedobject = {
        fetchProduct,
        builProduct,
        list
    }
    return (<ShoppingContext.Provider value={sharedobject}>
        {children}
    </ShoppingContext.Provider>)

}
export { Provider }
export default ShoppingContext
