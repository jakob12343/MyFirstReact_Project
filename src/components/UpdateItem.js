import React, { useContext, useEffect, useState } from 'react';
import ShoppingContext from './Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UpdateItem.css';

const UpdateItem = () => {
  const { Item, fetchImage, carCategories } = useContext(ShoppingContext);
  const [brand, setBrand] = useState(Item.Brand);
  const [engine, setEngine] = useState(Item.engine);
  const [category, setCategory] = useState(Item.category);
  const [minPrice, setMinPrice] = useState(Item.min_price);
  const [maxPrice, setMaxPrice] = useState(Item.max_price);
  const [kmInScale, setKmInScale] = useState(Item.kilometer_scale);
  const [updateStatus, setUpdateStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setUpdateStatus('');
  }, []);

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleEngineChange = (event) => {
    setEngine(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleKmInScaleChange = (event) => {
    setKmInScale(event.target.value);
  };

  const update = async () => {
    if (!brand || !engine || !category || !minPrice || !maxPrice || !kmInScale) {
      setShowToast(true);
      return;
    }

    const updatedItem = {
      ...Item,
      Brand: brand,
      engine: engine,
      category: category,
      min_price: minPrice,
      max_price: maxPrice,
      kilometer_scale: kmInScale,
      isFavorite: false,
      image: await fetchImage(brand)
    };

    setLoading(true);

    try {
      await axios.put('http://localhost:3000/Update', updatedItem);
      setUpdateStatus('Item updated successfully!');
    } catch (error) {
      setUpdateStatus('Failed to update item. Item does not exist.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    update();
  };

  return (
    <div className="update-item-container">
      <Card>
        <Card.Img variant="top" src={Item.image} className="update-item-image" />
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Brand</InputGroup.Text>
              <Form.Control value={brand} onChange={handleBrandChange} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Engine</InputGroup.Text>
              <Form.Control value={engine} onChange={handleEngineChange} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Category</InputGroup.Text>
              <Form.Select value={category} onChange={handleCategoryChange}>
                <option value="">Select category</option>
                {carCategories.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Min Price</InputGroup.Text>
              <Form.Control value={minPrice} onChange={handleMinPriceChange} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Max Price</InputGroup.Text>
              <Form.Control value={maxPrice} onChange={handleMaxPriceChange} />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Km In Scale</InputGroup.Text>
              <Form.Control value={kmInScale} onChange={handleKmInScaleChange} />
            </InputGroup>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
            </Button>
          </Form>
          {updateStatus && (
            <p>
              {updateStatus}{' '}
              {updateStatus === 'Item updated successfully!' && (
                <Link to="/" className="home-link">
                  Go to Home
                </Link>
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

export default UpdateItem;
