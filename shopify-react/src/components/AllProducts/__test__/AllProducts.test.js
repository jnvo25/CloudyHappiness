import * as ReactDOM from "react-dom";
import { ShopContext } from "../../../context/shopContext";

import AllProducts from '../AllProducts';
import {shopContext} from '../../../context/shopContext';

test("renders AllProducts correctly", ()=> {
    const root = document.createElement("div");
    ReactDOM.render(
        <ShopContext.Provider value={false}>
            <AllProducts />
        </ShopContext.Provider>
    , root);
})