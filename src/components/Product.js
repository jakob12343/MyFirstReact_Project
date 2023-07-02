import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShoppingContext from './Context';

function Product({ item }) {
  const { builProduct } = useContext(ShoppingContext);

  const handleUpdate = () => {
    builProduct(item);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.Brand}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
