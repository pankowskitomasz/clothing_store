import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return(      
            <footer>
                <Container fluid className="d-flex align-items-center p-3 bg-footer border-top border-dark-pink z-index-0">
                    <Row className="mx-auto text-center d-flex w-100">
                        <Col xs={10} className="mx-auto">
                            <small className="my-0 text-dark-pink">
                                Copyright &copy; 2021-2022 Tomasz Pankowski. All rights reserved. 
                                <Link to={this.props.privacyLink.href} className="text-dark-pink text-decoration-none">
                                    {this.props.privacyLink.name}
                                </Link>
                            </small>
                        </Col>
                    </Row>
                </Container> 
            </footer> 
        );
    }
}

export default Footer;