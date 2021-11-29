import React, { useState, useEffect, useContext } from "react";
import { Anchor } from "atomize";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { Nav, Navbar } from "react-bootstrap";

import './Navbar.css';

const MyNav = () => {
  const { openCart } = useContext(ShopContext);

  const [scrollState, setScrollState] = useState("top");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
      let listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop
          if (scrolled >= 150) {
              if(scrollState !== "#FFFFFF") {
                  setScrollState("#FFFFFF")
              }
          } else {
              if(scrollState !== "rgba(0, 0, 1, 0)") {
                  setScrollState("rgba(0, 0, 1, 0)")
              }
          }
      })
      return () => {
          document.removeEventListener("scroll", listener)
      }
  }, [scrollState])

  return (
    <Navbar expanded={expanded} onToggle={(e) => {if(e) setScrollState("#FFFFFF")}} style={{backgroundColor: scrollState}} className="justify-content-around" fixed="top" variant="light" expand="lg">
      <Navbar.Toggle onClick={()=> {setExpanded(expanded ? false : "expanded")}} aria-controls="basic-navbar-nav" />
      <Link to="/">
        <img className="brand" src={"https://firebasestorage.googleapis.com/v0/b/cloudy-happiness-webstor-1888d.appspot.com/o/assets%2FBlue_beige_Logo.png?alt=media&token=5953689e-6c28-46be-b4cd-80b827682c26"} alt="Cloudy Happiness" />
      </Link>
      <div style={{display: "flex", width: "50px", justifyContent: "flex-end"}}>
        {/* <Nav.Link class="nav-icons ms-auto"><i class="fas fa-user"></i></Nav.Link> */}
        <Anchor onClick={() => openCart()}>
          <p data-testid="shopping-cart" className="nav-icons ms-auto"><i className="fas fa-shopping-cart"></i></p>
        </Anchor>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav.Link as={Link} to="/" onClick={()=> {setExpanded(expanded ? false : "expanded")}}>Home</Nav.Link>
        
        <Nav.Link as={Link} to="/products" onClick={()=> {setExpanded(expanded ? false : "expanded")}}>Products</Nav.Link>

        <Nav.Link as={Link} to="/aboutus" onClick={()=> {setExpanded(expanded ? false : "expanded")}}>About Us</Nav.Link>
        
        <Nav.Link>Resources</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MyNav;
