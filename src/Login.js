import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ShoppingContext from './components/Context';

const Login = () => {
  const { Addlinkforclinects } = useContext(ShoppingContext);

  const switchSeller = () => {
    Addlinkforclinects('seller');
  };

  const switchClient = () => {
    Addlinkforclinects('client');
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Choose your role</Card.Subtitle>
          <Link to="/SellersUI" className="mb-3">
            <Button onClick={switchSeller} variant="primary" className="w-100">
              Sellers
            </Button>
          </Link>
          <Link to="/ClientsUI">
            <Button onClick={switchClient} variant="secondary" className="w-100">
              Clients
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
