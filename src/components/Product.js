import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{Brand}</Card.Title>
        <Card.Text>
         
          <strong>Engine:</strong> {engine}
          <br />
          <strong>Category:</strong> {category}
          <br />
          <strong>Min Price:</strong> {min_price}
          <br />
          <strong>Max Price:</strong> {max_price}
          <br />
          <strong>Kilometer Scale:</strong> {kilometer_scale}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
