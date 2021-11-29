import * as ReactDOM from "react-dom";
import { ShopContext } from "../../../context/shopContext";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from '../Navbar';

test("renders Navbar links correctly", ()=> {
    const openCart = jest.fn();
    const checkout = {};
    checkout.lineItems = [];
    const { getByText } = render(
        <ShopContext.Provider value={{isCartOpen: true, openCart, checkout}}>
            <BrowserRouter>            
                <Navbar />
            </BrowserRouter>
        </ShopContext.Provider>
    );

    expect(getByText("Home").closest('a')).toHaveAttribute('href', '/');
    expect(getByText("Products").closest('a')).toHaveAttribute('href', '/products');
    expect(getByText("About Us").closest('a')).toHaveAttribute('href', '/aboutus');
});