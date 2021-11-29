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
        <Image id="mobile-cloudy-image" src="https://firebasestorage.googleapis.com/v0/b/cloudy-happiness-webstor-1888d.appspot.com/o/assets%2Fheader-cloud.png?alt=media&token=6ff1c483-a555-4000-a7c1-7094e72cef93" fluid />
    </Col>
    </Row>
    </Container>
  );
}

export default CloudyNav;
