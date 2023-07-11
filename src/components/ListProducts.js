import React, { useContext, useEffect } from 'react'
import ShoppingContext from './Context'
import Product from './Product';
import './ListProducts.css';  // in ListProducts.js

const ListProducts = () => {
    const {list, fetchProduct }= useContext(ShoppingContext)

    useEffect(() => {
        fetchProduct();
      }, []);
  return (
    <div className='display-flex'>
      
               {list.map(el=> <Product item={el} key={el.uniuqe_id} />)}

    </div>
  )
}

export default ListProducts