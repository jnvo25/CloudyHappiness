import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import ProductImage from "./ProductImage";

import './SingleProduct.css';
import CloudyNav from '../Template/CloudyNav';


const ProductPage = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product } =
    useContext(ShopContext);
  // const [product, setProduct] = useState(null)
  // async function fetchData() {
  //     const fetchedProduct = await fetchProductWithId(id)
  //     setProduct(fetchedProduct)
  // }

  useEffect(() => {
    window.scrollTo(0,0);
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
      <Container style={{fontFamily: 'Shrikhand'}}>
          <ProductImage images={product.images} />
          <Row className="pt-5">
              <Col>
                <h1>{product.title}</h1>
                <h2>${product.variants[0].price}</h2>
              </Col>
          </Row>
          <Row className="pt-3">
              <Col><h3>Sizes</h3></Col>
          </Row>
          <Row style={{width: "20rem"}}>
              <Col><Button className="white-button">S</Button></Col>
              <Col><Button className="white-button">M</Button></Col>
              <Col><Button className="white-button">L</Button></Col>
              <Col><Button className="white-button">XL</Button></Col>
          </Row>
          <Row className="pt-4">
              <Col>
                <h3>Quantity</h3>
                <InputGroup className="mb-3" style={{width: "105px"}}>
                  <Button variant="outline-secondary" id="button-addon1">
                    -
                  </Button>
                  <FormControl
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    +
                  </Button>
                </InputGroup>
              </Col>
          </Row>
          <Row className="pt-4 text-center">
              <Col>
                <Button className="white-button rounded-pill" onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add to Cart</Button>
              </Col>
          </Row>
      </Container>
    </>
  );
};

export default ProductPage;
