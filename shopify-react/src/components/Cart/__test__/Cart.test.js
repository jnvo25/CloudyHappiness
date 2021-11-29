import { ShopContext } from "../../../context/shopContext";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from '../Cart';

test("Cart appears when opened", ()=> {
    const openCart = jest.fn();
    const checkout = {};
    checkout.lineItems = [];
    const { getByText } = render(
        <ShopContext.Provider value={{isCartOpen: true, openCart, checkout}}>
            <BrowserRouter>            
                <Cart />
            </BrowserRouter>
        </ShopContext.Provider>
    );

    getByText("Bag");
});

test("Cart does not appear when not opened", ()=> {
    const openCart = jest.fn();
    const checkout = {};
    checkout.lineItems = [];
    const { queryAllByText } = render(
        <ShopContext.Provider value={{isCartOpen: false, openCart, checkout}}>
            <BrowserRouter>            
                <Cart />
            </BrowserRouter>
        </ShopContext.Provider>
    );

    expect(queryAllByText("Bag")).toHaveLength(0);
});