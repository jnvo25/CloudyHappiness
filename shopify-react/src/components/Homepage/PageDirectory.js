import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './PageDirectory.css';
function PageDirectory() {
    return (
        // Place your implementation between these divs
        <Container fluid id="directory">
            <Row>
                <Col id="shopNav">
                    <Link to="/products">
                    <img id='shopCloud' className="clouds" src="https://cdn.discordapp.com/attachments/400879855790718976/913563253853003796/Cloud_Blue.png" />
                    <button id="shopBtn">
                        <a href="" class="linkText">SHOP</a>
                    </button>
                    </Link>
                </Col>

                <Col id="faqNav">
                    <img id='faqCloud' className="clouds" src="https://cdn.discordapp.com/attachments/400879855790718976/913563254167593020/Cloudy_Happiness_Green.png" />
                    <button id="faqBtn">
                        <a href="" class="linkText">FAQ</a>
                    </button>
                </Col>

                <Col id="contactNav">
                    <img id='contactCloud' className="clouds" src="https://cdn.discordapp.com/attachments/400879855790718976/913563254620565534/Cloudy_Happiness_Pink.png" />
                    <button id="contactBtn">
                        <a href="" class="linkText">CONTACT</a>
                    </button>
                </Col>
            </Row>
        </Container>
    );
}

export default PageDirectory;
