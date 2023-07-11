import axios from 'axios';
import React, {  useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import ShoppingContext from './Context';

const AddItem = () => {
    const { fetchProduct } = useContext(ShoppingContext)

  const [brand, setBrand] = useState('');
  const [engine, setEngine] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [kmInScale, setKmInScale] = useState('');

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
  const handleSubmit = (event) => {
    event.preventDefault();

   
  };
  const Create=async()=>{
   const Item =[
    {
        "Brand": brand,
        "engine": engine,
        "category": category,
        "min_price": minPrice,
        "max_price": maxPrice,
        "kilometer_scale": kmInScale
    
       }
   ]
   
    await axios.post('http://localhost:3000/Create' , Item)
    fetchProduct()
  }
 
  return (
    <div>
      <Card style={{ width: '25rem' }}>
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
            <Button type="submit" onClick={Create} variant="primary">
              Submit
            </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddItem;
