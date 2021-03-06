import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ShopProvider from "../context/shopContext";
import HomePage from "../components/Homepage/Homepage";
import AllProducts from "../components/AllProducts/AllProducts";
import AboutUs from "../components/AboutUs/AboutUs";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Template/Footer";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <BrowserRouter>
          <Navbar />
          <Cart />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
