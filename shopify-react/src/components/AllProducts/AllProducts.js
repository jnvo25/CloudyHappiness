import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shopContext";
// import { Text, Div, Row, Col, Container } from "atomize";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {
      // cleanup
    };
  }, [fetchAllProducts]);

  if (!products) return <div>Loading</div>;
  return (
    <Container>
      <Row>
        {products.map((product) => (
        <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
        >
          <Col key={product.id} xs={12}>
            <Card>
                <Card.Img variant="top" src={product.images[0].src} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '17px' }}>{product.title}</Card.Title>
                </Card.Body>
            </Card>
          </Col>
        </Link>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
