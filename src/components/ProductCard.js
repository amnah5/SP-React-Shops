import { Card, Col } from "react-bootstrap";

function ProductCard({ product }) {
  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price} KD</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
