import React, { useContext } from "react";
import { Container, Anchor, Icon } from "atomize";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { Nav, Navbar } from "react-bootstrap";

import './Navbar.css';

const MyNav = () => {
  const { openCart } = useContext(ShopContext);

  return (
    <>
      <Navbar className="me-auto" collapseOnSelect sticky="top" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/">
          <img className="brand mx-auto" src={"https://i.ibb.co/B6T1b2n/Cloudy-Happiness-5.png"} alt="Cloudy Happiness" />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/">
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Resources</Nav.Link>
          {/* <Button className="mb-3 nav-button" variant="secondary" href="tel:818-993-1369"><i className="fas fa-phone-alt pr-1"/>Call Us</Button> */}
        </Navbar.Collapse>
        <Nav.Link class="nav-icons ms-auto"><i class="fas fa-user"></i></Nav.Link>
        <Anchor onClick={() => openCart()}>
          <Nav.Link class="nav-icons ms-auto"><i class="fas fa-shopping-cart"></i></Nav.Link>
        </Anchor>
      </Navbar>
      
    </>
  )
  // return (
  //   <>
  //     <Container d="flex" flexDir="row" p="2rem" justify="space-between">
  //       <Link to="/">
  //         <Icon name="Store" size="30px" color="black500" />
  //       </Link>
  //       <Anchor onClick={() => openCart()}>
  //         <Icon name="Bag" size="20px" color="black500" />
  //       </Anchor>
  //     </Container>
  //   </>
  // );
};

export default MyNav;
