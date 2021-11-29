import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CloudyNav from '../Template/CloudyNav';

import CloudyNav from "../Template/CloudyNav";
import "./AllProducts.css"

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0,0);
    fetchAllProducts();
    return () => {
      // cleanup
    };
  }, [fetchAllProducts]);

  if (!products) return <div>Loading</div>;
  return (
    <>
      <CloudyNav />
      <Container className="rounded" id="products">
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={6}>
              <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
              >
              <Card className="product-card mb-4 text-center border-0">
                  <Card.Img className="product-images" variant="top" src={product.images[0].src} />
                  <Card.Body>
                      <Card.Title style={{ fontSize: '15px', fontFamily: 'Shrikhand' }}>{product.title}</Card.Title>
                  </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
};

export default HomePage;
