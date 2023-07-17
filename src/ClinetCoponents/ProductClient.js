import React, { useContext } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ShoppingContext from '../components/Context';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import'./ClientList.css'
function Product({ item }) {
  const { Brand, engine, category, min_price, max_price, kilometer_scale } = item;
  const { fetchProduct, fetchCart } = useContext(ShoppingContext);
  
  const changeicon = () => {
    if (item.isFavorite) {
      return <BsStarFill onClick={RemoveFromFavorites} className="fav-icon" />;
    } else {
      return <BsStar onClick={AddToFavorites} className="fav-icon" />;
    }
  };

  const RemoveFromFavorites = async () => {
    item.isFavorite = false;
    await axios.put('http://localhost:3000/Update', item);
    fetchProduct();
  }

  const AddToFavorites = async () => {
    item.isFavorite = true;
    await axios.put('http://localhost:3000/Update', item);
    fetchProduct();
  }

  const HandleDelete = async () => {
    await axios.post(`http://localhost:3000/AddToCart`, [item]);
    fetchProduct();
    fetchCart();
  };

  const renderDelete = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add To Cart
    </Tooltip>
  ); 

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={item.image} className="product-img" style={{width:"100%" , height: "200px",  objectFit: "cover", objectPosition: "center"}} />
      {changeicon()}
      <Card.Body>
        <Card.Title className='product-title text-capitalize fw-bold'>{Brand}</Card.Title>
        <Card.Text className='product-text'>
          <strong className='text-capitalize fw-bold'>Engine:</strong> {engine}
          <br />
          <strong className='text-capitalize fw-bold'>Category:</strong> {category}
          <br />
          <strong className='text-capitalize fw-bold'>Min Price:</strong> {min_price}
          <br />
          <strong className='text-capitalize fw-bold'>Max Price:</strong> {max_price}
          <br />
          <strong className='text-capitalize fw-bold'>Kilometer Scale:</strong> {kilometer_scale}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="product-footer">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderDelete}
        >
          <Button onClick={HandleDelete} variant="danger" className="add-cart-button">
            <FaShoppingCart />          
          </Button>
        </OverlayTrigger>
      </Card.Footer>
    </Card>
  );
}

export default Product;
