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
      <Navbar className="justify-content-around" collapseOnSelect sticky="top" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/">
          <img className="brand" src={"https://i.ibb.co/B6T1b2n/Cloudy-Happiness-5.png"} alt="Cloudy Happiness" />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          
          <Nav.Link><Link to="/products">Products</Link></Nav.Link>
          
          <Nav.Link>Resources</Nav.Link>
        </Navbar.Collapse>
        <div style={{display: "flex", width: "50px", justifyContent: "flex-end"}}>
          <Nav.Link class="nav-icons ms-auto"><i class="fas fa-user"></i></Nav.Link>
          <Anchor onClick={() => openCart()}>
            <Nav.Link class="nav-icons ms-auto"><i class="fas fa-shopping-cart"></i></Nav.Link>
          </Anchor>
        </div>
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
