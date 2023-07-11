import React, { useContext, useState } from 'react';
import ShoppingContext from './Context';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UpdateItem = () => {
  const { Item, image } = useContext(ShoppingContext);
  const [brand, setBrand] = useState(Item.Brand);
  const [engine, setEngine] = useState(Item.engine);
  const [category, setCategory] = useState(Item.category);
  const [minPrice, setMinPrice] = useState(Item.min_price);
  const [maxPrice, setMaxPrice] = useState(Item.max_price);
  const [kmInScale, setKmInScale] = useState(Item.kilometer_scale);

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

  const Uodate=async()=>{
    Item.Brand=brand
    Item.engine=engine
    Item.category=category
    Item.min_price=minPrice
    Item.max_price=maxPrice
    Item.kilometer_scale=kmInScale
    await axios.put('http://localhost:3000/Update' , Item)
  }
  const handleSubmit = (event) => {
    event.preventDefault();

   
  };

  return (
    <div>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Brand
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={brand}
                onChange={handleBrandChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Engine
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={engine}
                onChange={handleEngineChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Category
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={category}
                onChange={handleCategoryChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Min Price
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Max Price
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Km In Scale
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={kmInScale}
                onChange={handleKmInScaleChange}
              />
            </InputGroup>
            <Link to={'/'}>
            <Button type="submit" onClick={Uodate} variant="primary">
              Submit
            </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateItem;
