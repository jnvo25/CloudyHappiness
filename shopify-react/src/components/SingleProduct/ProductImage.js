import { Container, Row, Col } from "react-bootstrap";

const ProductImage = (props) => {
    console.log(props);
    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <img style={{width: "100%"}} src={props.images[0].src} />        
                    </Col>
                </Row>
            </Col>
            <Col xs={9}>
                <img style={{width: "100%"}} src={props.images[0].src} />
            </Col>
        </Row>
    )
}

export default ProductImage;