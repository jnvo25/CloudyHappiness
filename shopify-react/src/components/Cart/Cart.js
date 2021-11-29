import React, { useContext } from "react";
import { Anchor } from "atomize";
import { ShopContext } from "../../context/shopContext";
import { Container, Row, Col, Offcanvas, Button, Image } from "react-bootstrap";
import "./Cart.css";
const NewCart = () => {
  const { isCartOpen, closeCart, checkout } = useContext(ShopContext);
  if (checkout.lineItems) {
    return (
      <Offcanvas placement={"end"} show={isCartOpen} onHide={closeCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bag</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container id="cart-body">
            <hr />
            <Row>
              {checkout.lineItems.length < 1 ? (
                <Col>Cart is Empty</Col>
              ) : (
                <>
                  {checkout.lineItems &&
                    checkout.lineItems.map((item) => (
                      <div key={item.id}>
                        <Col>
                          <Image src={item.variant.image.src} thumbnail />
                        </Col>
                        <Col>
                          <p>{item.title}</p>
                          <p>{item.variant.title}</p>
                          <p>{item.quantity}</p>
                        </Col>
                        <Col>
                          <p>{item.variant.price}</p>
                        </Col>
                      </div>
                    ))}
                </>
              )}
            </Row>
            <hr />
            <Row>
              <Col>
                <Anchor
                  w="100%"
                  href={checkout.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    disabled={checkout.lineItems.length < 1}
                    id="checkout-button"
                  >
                    Checkout
                  </Button>
                </Anchor>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  return null;
};

export default NewCart;
