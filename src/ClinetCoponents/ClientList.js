import React, { useContext, useEffect } from 'react'
import ShoppingContext from '../components/Context';
import ProductClient from './ProductClient';
const ClientList = () => {
    const {list, fetchProduct,fetchCart,Addlinkforclinects }= useContext(ShoppingContext)

    useEffect(() => {
        fetchProduct();
        fetchCart()
        Addlinkforclinects('client')
      }, []);
      
  return (
    <div className='display-flex'>
      
      
               {list.map(el=> <ProductClient item={el} key={el.id} />)}

    </div>
  )
}

export default ClientList