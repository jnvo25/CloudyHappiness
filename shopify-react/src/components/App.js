import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ShopProvider from "../context/shopContext";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";

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
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
