import React, { useContext } from 'react';
import { Anchor } from "atomize";
import {ShopContext} from '../context/shopContext';
import { Container, Row, Col, Offcanvas, Button, Image } from 'react-bootstrap';
import './Cart.css';
const NewCart = () => {

    const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

    if (checkout.lineItems) {
        return (
            <Offcanvas placement={'end'} show={isCartOpen} onHide={closeCart}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Bag</Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Container id="cart-body">
                        <Row style={{height: "90%"}}>
                            {checkout.lineItems.length < 1 ?
                                <Col>Cart is Empty</Col>
                                :
                                <>
                                    {checkout.lineItems && checkout.lineItems.map(item => (
                                        <>
                                            <Col><Image src={item.variant.image.src} thumbnail /></Col>
                                            <Col>
                                                <p>{item.title}</p>
                                                <p>{item.variant.title}</p>
                                                <p>{item.quantity}</p>
                                            </Col>
                                            <Col>
                                                <p>{item.variant.price}</p>
                                            </Col>
                                        </>
                                    ))}
                                </>
                            }
                        </Row> 
                        <Row>
                            <Col>
                                <Anchor w="100%" href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
                                    <Button id="checkout-button">
                                        Checkout
                                    </Button>
                                </Anchor>
                            </Col>
                        </Row>
                    </Container>                
                </Offcanvas.Body>
            </Offcanvas>
            // <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
            //     <Container d="flex" flexDir="column" h="100%">
            //         <Row justify="space-between" border={{ b: '1px solid' }} p="0.7rem" borderColor="gray300">
            //             <Text tag="h1" textColor="black500" textSize="paragraph" hoverTextColor="black700" transition="0.3s">Bag</Text>
            //             <Anchor onClick={() => closeCart()} ><Icon name="Cross" color="black500"/></Anchor>
            //         </Row>
            //         <Row flexGrow="2" p="0.7rem" overflow="auto" flexWrap="nowrap" flexDir="column">
            //             {checkout.lineItems.length < 1 ?
            //                 <Row>
            //                     <Col><Text tag="h1" textColor="black500" textSize="paragraph" hoverTextColor="black700" transition="0.3s">Cart Is Empty</Text></Col>
            //                 </Row>
            //                 :
            //                 <>
            //                     {checkout.lineItems && checkout.lineItems.map(item => (
            //                         <Row key={item.id} p={{ t:"5px" }}>
            //                             <Col>
            //                                 <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center" h="5rem" w="4rem"/>
            //                             </Col>
            //                             <Col>
            //                                 <Text>{item.title}</Text>
            //                                 <Text>{item.variant.title}</Text>
            //                                 <Text>{item.quantity}</Text>
            //                             </Col>
            //                             <Col>
            //                                 <Text>{item.variant.price}</Text>
            //                             </Col>
            //                         </Row>
            //                     ))}
            //                 </>
            //             }
            //         </Row>
            //         <Row border={{ t: '1px solid' }} p="0.7rem" borderColor="gray300">
            //             <Anchor w="100%" href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
            //                 <Button w="100%" rounded="0" bg="black500" shadow="2" hoverShadow="3" m={{t: '1rem'}}>
            //                     Checkout
            //                 </Button>
            //             </Anchor>
            //         </Row>
            //     </Container>
            // </SideDrawer>
        )
    }

    return null

}

export default NewCart