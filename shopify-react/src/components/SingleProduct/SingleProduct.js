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

  const [selectedS, setSelectedS] = useState(false);
  const [selectedM, setSelectedM] = useState(false);
  const [selectedL, setSelectedL] = useState(false);
  const [selectedXL, setSelectedXL] = useState(false);
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
      setSelectedS(true);
      setSelectedM(false);
      setSelectedL(false);
      setSelectedXL(false);
    } else if (sizeClicked === "M") {
      setSize(1);
      setSelectedS(false);
      setSelectedM(true);
      setSelectedL(false);
      setSelectedXL(false);
    } else if (sizeClicked === "L") {
      setSize(2);
      setSelectedS(false);
      setSelectedM(false);
      setSelectedL(true);
      setSelectedXL(false);
    } else if (sizeClicked === "XL") {
      setSize(3);
      setSelectedS(false);
      setSelectedM(false);
      setSelectedL(false);
      setSelectedXL(true);
    }
  };

  const onAddItem = () => {
    if (product.variants.length > 1 && size === -1) {
      alert("Please select a size");
      return;
    }
    if (quantity === 0) {
      alert("Please declare quantity more than 0");
      return;
    }
    if (product.variants.length > 1) {
      addItemToCheckout(product.variants[size].id, quantity);
    } else {
      addItemToCheckout(product.variants[0].id, quantity);
    }

    setQuantity(0);
    setSize(-1);
    setSelectedS(false);
    setSelectedM(false);
    setSelectedL(false);
    setSelectedXL(false);
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
        {product.variants.length > 1 && (
          <>
            <Row className="pt-3">
              <Col>
                <h3>Sizes</h3>
              </Col>
            </Row>
            <Row style={{ width: "20rem" }}>
              <Col>
                {selectedS ? (
                  <Button className="selected-button" onClick={onSetSize}>
                    S
                  </Button>
                ) : (
                  <Button className="white-button" onClick={onSetSize}>
                    S
                  </Button>
                )}
              </Col>
              <Col>
                {selectedM ? (
                  <Button className="selected-button" onClick={onSetSize}>
                    M
                  </Button>
                ) : (
                  <Button className="white-button" onClick={onSetSize}>
                    M
                  </Button>
                )}
              </Col>
              <Col>
                {selectedL ? (
                  <Button className="selected-button" onClick={onSetSize}>
                    L
                  </Button>
                ) : (
                  <Button className="white-button" onClick={onSetSize}>
                    L
                  </Button>
                )}
              </Col>
              <Col>
                {selectedXL ? (
                  <Button className="selected-button" onClick={onSetSize}>
                    XL
                  </Button>
                ) : (
                  <Button className="white-button" onClick={onSetSize}>
                    XL
                  </Button>
                )}
              </Col>
            </Row>
          </>
        )}

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
