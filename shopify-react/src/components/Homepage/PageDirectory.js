import { Container, Row, Col } from "react-bootstrap";
import './PageDirectory.css';
function PageDirectory() {
    return (
        // Place your implementation between these divs
        <Container fluid id="directory">
            <Row>
                <Col id="shopNav">
                    <img id='shopCloud' className="clouds" src="https://cdn.discordapp.com/attachments/400879855790718976/913563253853003796/Cloud_Blue.png" />
                    <button id="shopBtn">
                        SHOP
                    </button>
                </Col>

                <Col id="faqNav">
                    <img id='faqCloud' className="clouds" src="https://cdn.discordapp.com/attachments/400879855790718976/913563254167593020/Cloudy_Happiness_Green.png" />
                    <button id="faqBtn">
                        FAQ
                    </button>
                </Col>

                <Col id="contactNav">
                    <img id='contactCloud' className="clouds" src="https://cdn.discordapp.com/attachments/400879855790718976/913563254620565534/Cloudy_Happiness_Pink.png" />
                    <button id="contactBtn">
                        CONTACT
                    </button>
                </Col>
            </Row>
        </Container>
    );
}

export default PageDirectory;
