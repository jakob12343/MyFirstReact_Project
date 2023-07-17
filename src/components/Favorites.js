import React, { useContext, useEffect } from 'react';
import ShoppingContext from './Context';
import './favorites.css'
const Favorites = () => {
  const { list, fetchProduct ,Addlinkforclinects} = useContext(ShoppingContext);

  useEffect(() => {
    fetchProduct();
    Addlinkforclinects('client')

  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Favorites</h2>
      {list.map((el) => {
        if (el.isFavorite) {
          return (
            <div className="card mb-3" key={el.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={el.image} className="img-fluid rounded-start" alt="Product" />
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
                        reprehenderit nesciunt sunt eligendi dolore voluptate optio doloribus aperiam quasi iste! Sed.</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Favorites;
