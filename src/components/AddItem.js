import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';
import { Link } from 'react-router-dom';
import './AddItem.css';
import ShoppingContext from './Context';

const AddItem = () => {
  const [brand, setBrand] = useState('');
  const [engine, setEngine] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [kmInScale, setKmInScale] = useState('');
  const [createStatus, setCreateStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { fetchImage, carCategories,Addlinkforclinects } = useContext(ShoppingContext);
  useEffect(() => {
    Addlinkforclinects('seller')

  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!brand || !engine || !category || !minPrice || !maxPrice || !kmInScale) {
      setShowToast(true);
      return;
    }

    const newItem = [{
      image: await fetchImage(brand+" "+category),
      Brand: brand,
      engine: engine,
      category: category,
      min_price: minPrice,
      max_price: maxPrice,
      kilometer_scale: kmInScale,
      isFavorite: false
    }];

    setLoading(true);

    try {
      await axios.post('http://localhost:3000/Create', newItem);
      setCreateStatus('Item created successfully!');
      setBrand('');
      setEngine('');
      setCategory('');
      setMinPrice('');
      setMaxPrice('');
      setKmInScale('');
    } catch (error) {
      setCreateStatus('Failed to create item.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-item-container">
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Engine</Form.Label>
              <Form.Control
                type="text"
                value={engine}
                onChange={(event) => setEngine(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">Select category</option>
                {carCategories.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Min Price</Form.Label>
              <Form.Control
                type="text"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Max Price</Form.Label>
              <Form.Control
                type="text"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Km In Scale</Form.Label>
              <Form.Control
                type="text"
                value={kmInScale}
                onChange={(event) => setKmInScale(event.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>
          </Form>
          {createStatus && (
            <p className="mt-3">
              {createStatus}{' '}
              {createStatus === 'Item created successfully!' && (
                <Link to="/" className="home-link">Go to Home</Link>
              )}
            </p>
          )}
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}
            autohide
            className="error-toast"
          >
            <Toast.Header>
              <strong className="mr-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>Please fill in all fields</Toast.Body>
          </Toast>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddItem;
