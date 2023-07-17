import React, { useContext, useEffect } from 'react';
import ShoppingContext from '../components/Context';
import Button from 'react-bootstrap/Button';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'; // import the trash, plus and minus icons from Font Awesome
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './Cart.css';

const Cart = () => {
  const {list, Cart, fetchCart, removeItem, Addlinkforclinects, incrementItem, decrementItem,fetchProduct } = useContext(ShoppingContext);

  useEffect(() => {
    fetchCart();
    fetchProduct()
    Addlinkforclinects('client')
  }, []);

  const handleRemoveItem = (id) => {
    removeItem(id);
    fetchCart();
  }
const titleImage=(el)=>{
  if (list.findIndex(item=> el.id===item.id)===-1) {
    return <>
                <img src={el.image} className="img-fluid rounded-start" alt="Product" />
                <h1 className='text-capitalize ms-5' style={{position: "absolute", objectPosition:"center", zIndex: "9", top: "30%" , color: "red", backgroundColor: "black"}} >this car is not releavent anymore</h1>

  </>
  }
else return <img src={el.image} className="img-fluid rounded-start" alt="Product" />

  
}
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to remove item from cart
    </Tooltip>
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      {Cart.map((el) => {
        return (
          <div className="card mb-3" key={el.id}>
            <div className="row g-0">
              <div className="col-md-4">
                {titleImage(el)}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-capitalize fw-bold">{el.Brand}</h5>
                  <p className="card-text text-capitalize fw-bold">engine: {el.engine}</p>
                  <p className="card-text text-capitalize fw-bold">category: {el.category}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum rem totam atque architecto pariatur soluta fugiat,
                      nostrum vero,
                      reprehenderit nesciunt sunt eligendi dolore voluptate optio doloribus aperiam quasi iste! Sed.
                    </small>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <Button variant="danger" onClick={() => handleRemoveItem(el.id)}>
                          <FaTrash />
                        </Button>
                      </OverlayTrigger>
                    </div>
                    <div>
                    <span className="text-muted mx-2">
  Quantity:
  <Button size="sm" variant="primary" onClick={() => decrementItem(el)}><FaMinus /></Button>
  <span className="quantity-badge">{el.amount}</span>
  <Button size="sm" variant="primary" onClick={() => incrementItem(el)}><FaPlus /></Button>
</span>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
