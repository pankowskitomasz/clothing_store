import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class ProductsList extends Component{
    render(){
        return(          
            <Container fluid className="d-flex align-items-center">     
                <Row className="mx-0 w-100">
                    <Col xs={12} className="mx-auto">

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProductsList;