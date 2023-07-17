import React, { useContext, useEffect } from 'react'
import ShoppingContext from './Context'
import Product from './Product';
import './ListProducts.css';  // in ListProducts.js
import { Link } from 'react-router-dom';
const ListProducts = () => {
    const {list, fetchProduct,Addlinkforclinects }= useContext(ShoppingContext)

    useEffect(() => {
        fetchProduct();
        Addlinkforclinects('seller')

      }, []);
      if(list.length===0){
        return <div>
         <h1>no item have been added</h1>
         <Link to="/AddItem">

         <button>add new item</button>
         </Link>
          </div>;

      }
  return (
    <div className='display-flex'>
      
      
               {list.map(el=> <Product item={el} key={el.id} />)}

    </div>
  )
}

export default ListProducts