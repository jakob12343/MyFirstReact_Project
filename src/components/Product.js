import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Product.css';
import ShoppingContext from './Context';
import { BsTrash, BsPencilFill} from 'react-icons/bs';


function Product({ item }) {
  const { Brand, engine, category, min_price, max_price, kilometer_scale } = item;
  const { fetchProduct, ItemToUpdate } = useContext(ShoppingContext);
 
  
  const HandleDelete = async () => {
    await axios.delete(`http://localhost:3000/Delete?id=${item.id}`);
    fetchProduct();
  };

  const HandleUpdate = () => {
    ItemToUpdate(item);
  };

  const renderDelete = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete Item
    </Tooltip>
  );

  const renderUpdate = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Update Item
    </Tooltip>
  );

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
      <div>
        <Card.Img variant="top" src={item.image} className="Product-img " style={{width:"100%" , height: "200px",  objectFit: "cover", objectPosition: "center"}} />


      </div>
      <Card.Body>
        <Card.Title className='text-capitalize fw-bold'>{Brand}</Card.Title>
        <Card.Text style={{ padding: '1rem' }}>
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
      <Card.Footer>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderDelete}
        >
          <Button onClick={HandleDelete} variant="danger" style={{ margin: '0.5rem' }}>
            <BsTrash />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderUpdate}
        >
          <Link to="/UpdateItem">
            <Button onClick={HandleUpdate} variant="primary" style={{ margin: '0.5rem' }}>
              <BsPencilFill />
            </Button>
          </Link>
        </OverlayTrigger>
      </Card.Footer>
    </Card>
  );
}

export default Product;
