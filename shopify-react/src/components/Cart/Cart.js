import React, { useContext } from "react";
import { Anchor } from "atomize";
import { ShopContext } from "../../context/shopContext";
import {
  Container,
  Row,
  Col,
  Offcanvas,
  Button,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Cart.css";
const NewCart = () => {
  const {
    isCartOpen,
    closeCart,
    checkout,
    updateItemToCart,
    deleteItemToCart,
  } = useContext(ShopContext);

  const onDeleteItem = (deleteID) => {
    console.log("DeleteID:", deleteID);
    deleteItemToCart(deleteID);
  };

  const onSubtractQuantity = (itemID, quantity) => {
    if (quantity !== 1) {
      updateItemToCart(itemID, quantity - 1);
    }
  };

  const onAddQuantity = (itemID, quantity) => {
    updateItemToCart(itemID, quantity + 1);
  };

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
                        <Button
                          variant="outline-secondary"
                          id="deleteButton"
                          onClick={() => onDeleteItem(item.id)}
                        >
                          X
                        </Button>

                        <Col>
                          <Image src={item.variant.image.src} thumbnail />
                        </Col>
                        <Col>
                          <p>{item.title}</p>
                          <p>{item.variant.title}</p>
                          <InputGroup
                            className="mb-3"
                            style={{ width: "130px" }}
                          >
                            <Button
                              variant="outline-secondary"
                              id="subQuantity"
                              onClick={() =>
                                onSubtractQuantity(item.id, item.quantity)
                              }
                            >
                              -
                            </Button>
                            <FormControl
                              aria-label="Example text with button addon"
                              aria-describedby="basic-addon1"
                              type="number"
                              value={item.quantity}
                            />
                            <Button
                              variant="outline-secondary"
                              id="addQuantity"
                              onClick={() =>
                                onAddQuantity(item.id, item.quantity)
                              }
                            >
                              +
                            </Button>
                          </InputGroup>
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
