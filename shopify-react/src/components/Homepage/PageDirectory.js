import './PageDirectory.css';
function PageDirectory() {
    return (
        // Place your implementation between these divs
        <div id="directory">
            <div id="shopNav" >
                <button id="shopBtn">
                    <a href="" class="linkText">Shop</a>
                </button>
            </div>

            <div id="faqNav" >
                <button id="faqBtn">
                    <a href="" class="linkText">FAQ</a>
                </button>
            </div>

            <div id="contactNav" >
                <button id="contactBtn">
                    <a href="" class="linkText">Contact</a>
                </button>
            </div>
        </div>
    );
}

export default PageDirectory;
