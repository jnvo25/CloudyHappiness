import { Container, Row, Col, Image } from 'react-bootstrap';

import './CloudyNav.css';

function CloudyNav() {
  return (
    <Container fluid className="p-0 pb-3">
    <Row>
    <Col id="desktop-cloudy-image" className="d-none d-sm-block">
        {/* <Image id="desktop-cloudy-image" src="https://i.ibb.co/HV98jfb/Section-Clouds.png" fluid /> */}
    </Col>
    <Col className="d-block d-sm-none">
        <Image id="mobile-cloudy-image" src="https://i.ibb.co/3f5KZph/Header-Cloud.png" fluid />
    </Col>
    </Row>
    </Container>
  );
}

export default CloudyNav;
