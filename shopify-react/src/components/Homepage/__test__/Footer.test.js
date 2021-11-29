import * as ReactDOM from "react-dom";
import { ShopContext } from "../../../context/shopContext";
import { render, fireEvent } from "@testing-library/react";

import Footer from '../Footer';

test("renders LearnMore component correctly", ()=> {
    const { getByText } = render(
        <ShopContext.Provider value={false}>
            <Footer />
        </ShopContext.Provider>
    );

    // Check if all hyperlinks exist
    getByText("Home");
    getByText("Shop");
    getByText("Contact");
    getByText("About");
    getByText("Sizing");
    getByText("Mission");
    getByText("FAQ");
    getByText("Exchanges");

})

test("footer links are properly connected", () => {
    const { getByText } = render(
        <ShopContext.Provider value={false}>
            <Footer />
        </ShopContext.Provider>
    );

    expect(getByText("Home").closest('a')).toHaveAttribute('href', '/');
    expect(getByText("Shop").closest('a')).toHaveAttribute('href', '/products');
    expect(getByText("About").closest('a')).toHaveAttribute('href', '/aboutus');
    // const input = getByText("My text");
    // fireEvent.change(input, { target : {value: "Text"}});
    // fireEvent.click(getByText("Submit"));
})