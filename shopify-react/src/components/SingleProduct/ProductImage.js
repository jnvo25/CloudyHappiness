import { Container, Row, Col } from "react-bootstrap";
import {useState} from "react";

const ProductImage = (props) => {
    const [currentImage, setCurrentImage] = useState(0);

    console.log(props);
    return (
        <Row>
            <Col>
                <Row>
                    {props.images.map((e, index) =>{ 
                        if(index > 3) return;
                        return(
                            <Col xs={12} className="pb-2" onClick={(event) => {setCurrentImage(index)}}>
                                <img id="product-image" style={{width: "100%", border: currentImage == index ? '5px solid rgba(0, 0, 0, 0.3)' : ""}} src={props.images[index].src} />
                            </Col>
                        )
                    })}
                </Row>
            </Col>
            <Col xs={9}>
                <img style={{width: "100%"}} src={props.images[currentImage].src} />
            </Col>
        </Row>
    )
}

export default ProductImage;