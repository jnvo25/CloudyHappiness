import * as ReactDOM from "react-dom";
import { ShopContext } from "../../../context/shopContext";

import LearnMore from '../LearnMore';

test("renders LearnMore component correctly", ()=> {
    const root = document.createElement("div");
    ReactDOM.render(
        <ShopContext.Provider value={false}>
            <LearnMore />
        </ShopContext.Provider>
    , root);

    expect(root.querySelector("button").textContent).toBe("LEARN MORE ABOUT WHY OUR FOUNDER STARTED CLOUDY HAPPINESS");
})