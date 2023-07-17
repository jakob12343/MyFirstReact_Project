import React, { useState, createContext } from "react";
import axios from 'axios'
import searchImages from "./UnsplashApi";

const ShoppingContext = createContext()
const Provider = ({ children }) => {
  const [list, setlist] = useState([])
  const [Item, setItem] = useState({})
  const [Cart, setCart] = useState([])
  const [UserMode, setUserMode] = useState('')
  const carCategories = [
    "Sedan",
    "SUV",
    "Hatchback",
    "Convertible",
    "Pickup Truck",
    "Sports Car",
    "Luxury",
    "Electric",
    "Hybrid",
    "Compact",
    "Crossover",
    "Minivan",
    "Super Cars",
    "Hyper Cars"
  ];

  const fetchProduct = async () => {
    const products = await axios.get('http://localhost:3000/Read')
    setlist(products.data)
  }
  const removeItem = async (id) => {
    await axios.delete(`http://localhost:3000/Delete/Cart?id=${id}`);
  }
  const fetchImage = async (brand) => {
    let image = await searchImages(brand)
    image = image[0].urls.small
    return image
  };
  const fetchCart = async () => {
    const products = await axios.get('http://localhost:3000/GetCart')
    setCart(products.data)
  }
  //Delete/Cart
  const ItemToUpdate = (item) => {

    setItem(item)
  }
  const Addlinkforclinects = (user) => {
    setUserMode(user)
  }
  const incrementItem = async (item) => {
    item.amount++
    await axios.put('http://localhost:3000/Update/Amount', item)
    fetchCart()
  }
  const decrementItem = async (item) => {
    if (item.amount > 1) {
      item.amount--
      await axios.put('http://localhost:3000/Update/Amount', item)
      fetchCart()
    }
    else
    {removeItem(item.id)
      fetchCart()
    }

  }
  
  const sharedobject = {
    fetchProduct,
    Addlinkforclinects,
    fetchCart,
    fetchImage,
    setlist,
    ItemToUpdate,
    removeItem,
    incrementItem,
    decrementItem,
    list,
    Item,
    carCategories,
    Cart,
    UserMode

  }
  return (<ShoppingContext.Provider value={sharedobject}>
    {children}
  </ShoppingContext.Provider>)



}
export { Provider }
export default ShoppingContext
