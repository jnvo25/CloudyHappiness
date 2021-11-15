import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "cloudyhappiness-co.myshopify.com",
  storefrontAccessToken: process.env.REACT_APP_STOREFRONT_TOKEN,
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: "test",
  };

  componentDidMount() {
    console.log("STOREFRONT TOKEN:", process.env.REACT_APP_STOREFRONT_TOKEN);
    this.createCheckout();
    this.fetchAllProducts();
  }

  // Create checkout
  createCheckout = async () => {
    // Create an empty checkout
    const checkout = await client.checkout.create();
    // Do something with the checkout
    this.setState({ checkout: checkout });
  };

  // Adding Line Items.
  // NOTE: variantId is the productId
  addItemToCart = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    // Add an item to the checkout
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );

    this.setState({ checkout: checkout });
  };

  // Updating Line Items. Update the quantity of the shopping cart.
  updateItemToCart = async (id, quantity) => {
    const lineItemsToUpdate = [
      {
        id,
        quantity: parseInt(quantity, 10),
      },
    ];

    // Update the line item on the checkout (change the quantity or variant)
    const checkout = await client.checkout.updateLineItems(
      this.state.checkout.id,
      lineItemsToUpdate
    );
    this.setState({ checkout: checkout });
  };

  // Fetching All Products
  fetchAllProducts = async () => {
    // Fetch all products in your shop
    const products = await client.product.fetchAll();
    this.setState({ products: products });
    console.log("All Products: ", products);
  };

  // Fetching single product
  fetchProductWithId = async (productId) => {
    const product = await client.product.fetch(productId);
    this.setState({ product: product });
  };

  closeCart = () => {
    this.setState({
      isCartOpen: false,
    });
  };

  openCart = () => {
    this.setState({
      isCartOpen: true,
    });
  };

  render() {
    return (
      <ShopContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
