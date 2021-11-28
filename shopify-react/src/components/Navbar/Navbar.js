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
      <Navbar.Toggle onClick={()=> {setExpanded(!expanded)}} aria-controls="basic-navbar-nav" />
      <Link to="/">
        <img className="brand" src={"https://firebasestorage.googleapis.com/v0/b/cloudy-happiness-webstore.appspot.com/o/assets%2FCloudy-Happiness-5.png?alt=media&token=848adcab-b1f6-4c52-8fa7-1c6c3f41a475"} alt="Cloudy Happiness" />
      </Link>
      <div style={{display: "flex", width: "50px", justifyContent: "flex-end"}}>
        {/* <Nav.Link class="nav-icons ms-auto"><i class="fas fa-user"></i></Nav.Link> */}
        <Anchor onClick={() => openCart()}>
          <Nav.Link class="nav-icons ms-auto"><i class="fas fa-shopping-cart"></i></Nav.Link>
        </Anchor>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav.Link><Link onClick={()=> {setExpanded(!expanded)}} to="/">Home</Link></Nav.Link>
        
        <Nav.Link><Link onClick={()=> {setExpanded(!expanded)}} to="/products">Products</Link></Nav.Link>

        <Nav.Link><Link onClick={()=> {setExpanded(!expanded)}} to="/aboutus">About Us</Link></Nav.Link>
        
        <Nav.Link>Resources</Nav.Link>
      </Navbar.Collapse>
      
      
    </Navbar>
  )
}
export default MyNav;
