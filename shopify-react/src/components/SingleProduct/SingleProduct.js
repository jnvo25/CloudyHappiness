import React, { useEffect, useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import ProductImage from "./ProductImage";

import CloudyNav from "../Template/CloudyNav";
import "./SingleProduct.css";

const ProductPage = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product } =
    useContext(ShopContext);
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState(-1);
  // const [product, setProduct] = useState(null)
  // async function fetchData() {
  //     const fetchedProduct = await fetchProductWithId(id)
  //     setProduct(fetchedProduct)
  // }

  const onAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const onSubtractQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };
  const onSetSize = (e) => {
    let sizeClicked = e.target.innerHTML;
    if (sizeClicked === "S") {
      setSize(0);
    } else if (sizeClicked === "M") {
      setSize(1);
    } else if (sizeClicked === "L") {
      setSize(2);
    } else if (sizeClicked === "XL") {
      setSize(3);
    }
  };

  const onAddItem = () => {
    if (size === -1) {
      alert("Please select a size");
      return;
    }
    if (quantity === 0) {
      alert("Please declare quantity more than 0");
      return;
    }
    addItemToCheckout(product.variants[size].id, quantity);
    setQuantity(0);
    setSize(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductWithId(id);
    // fetchData()
    return () => {
      // setProduct(null)
    };
  }, [fetchProductWithId, id]);

  if (!product.title) return <div>Loading</div>;
  return (
    <>
      <CloudyNav />
      <Container style={{ fontFamily: "Shrikhand" }}>
        <ProductImage images={product.images} />
        <Row className="pt-5">
          <Col>
            <h1>{product.title}</h1>
            <h2>${product.variants[0].price}</h2>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <h3>Sizes</h3>
          </Col>
        </Row>
        <Row style={{ width: "20rem" }}>
          <Col>
            <Button className="white-button" onClick={onSetSize}>
              S
            </Button>
          </Col>
          <Col>
            <Button className="white-button" onClick={onSetSize}>
              M
            </Button>
          </Col>
          <Col>
            <Button className="white-button" onClick={onSetSize}>
              L
            </Button>
          </Col>
          <Col>
            <Button className="white-button" onClick={onSetSize}>
              XL
            </Button>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <h3>Quantity</h3>
            <InputGroup className="mb-3" style={{ width: "130px" }}>
              <Button
                variant="outline-secondary"
                id="button-addon1"
                onClick={onSubtractQuantity}
              >
                -
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                type="number"
                value={quantity}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={onAddQuantity}
              >
                +
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row className="pt-4 text-center">
          <Col>
            <Button className="white-button rounded-pill" onClick={onAddItem}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
