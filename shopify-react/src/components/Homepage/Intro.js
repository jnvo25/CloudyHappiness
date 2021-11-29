import './Intro.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function Intro() {
    return (
        // Place your implementation between these divs
        <Container fluid id="intro" class='intro'>
            <div id="padding"></div>
            <div id='introContainer'>
                <img id='introImage' src="https://i.imgur.com/3Gu8S4H.png" />
                <div id='introText'>
                    On a mission to raise funds for mental health organizations and crowd funding efforts. Let’s destigmatize the conversations surrounding mental health!
                </div>
                <Link to="/products">
                    <button id='joinBtn'>
                        Join me
                        <img id='btnArrow' src="https://media.discordapp.net/attachments/400879855790718976/914722489542770751/arrow.png?width=676&height=676" />
                    </button>
                </Link>
            </div>
        </Container>
    );
}

export default Intro;