import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import './LearnMore.css';

function LearnMore() {
    return (
        // Place your implementation between these divs
        <Row>
            <div id="frame">
                <Col xs="auto" md="auto">
                    <img id='cloudleft' src="https://cdn.discordapp.com/attachments/714892213955592297/911789138926264320/unknown.png" />
                    <img id='cloudright' src="https://cdn.discordapp.com/attachments/714892213955592297/912084329440616518/unknown.png" />
                    <Link to="/aboutus">
                    <button id="learn">LEARN MORE ABOUT WHY OUR FOUNDER STARTED CLOUDY HAPPINESS<img id='face' className="bottom-right" src="https://cdn.discordapp.com/attachments/714892213955592297/911742690197119016/unknown.png" /></button>
                    </Link>
                </Col>
            </div >
        </Row>
    );
}

export default LearnMore;
