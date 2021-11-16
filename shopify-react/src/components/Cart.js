import React, {useContext} from "react";
import { ShopContext } from "../context/shopContext";
import { Div, SideDrawer, Text, Row, Col } from 'atomize';

const Cart = () => {
  const { isCartOpen, closeCart, checkout } = useContext(ShopContext);

  return (
    <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
      text
    </SideDrawer>
  )
}

export default Cart;