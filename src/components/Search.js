import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import ShoppingContext from './Context';
import Dropdown from 'react-bootstrap/Dropdown';

const Search = () => {
    const { setlist } = useContext(ShoppingContext)
    const [searchLine, setSearchLine] = useState('')
    const [options, setoptions]= useState('Search')
    useEffect(() => {
        fetchSeearch()

      }, []);
    const GetSearch = (event) => {

        setSearchLine(event.target.value)


    }
    const fetchSeearch = async () => {
        const products = await axios.get(`http://localhost:3000/Read?${options}=${searchLine}`)
        setlist(products.data)
        setoptions('Search')

       
    }
    const HandleOptions=(event)=>{
        console.log(event.target.innerText);
        setoptions(event.target.innerText)
    }


    return (
        <div>
            <Form className="d-flex">
                <Form.Control onChange={GetSearch}
                    type="search"
                    placeholder={options+'?'}
                    className="me-2"
                    aria-label="Search"
                />
                
                <Button variant="outline-success" onClick={fetchSeearch} >
                    Search
                </Button>
                
            </Form>
            <div className='d-flex justify-content-start'>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Search by?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={HandleOptions} href="#/action-1">Brand</Dropdown.Item>
        <Dropdown.Item onClick={HandleOptions} href="#/action-1">engine</Dropdown.Item>
        <Dropdown.Item onClick={HandleOptions} href="#/action-1">category</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
          </div>
        </div>
    )
}

export default Search