import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import notFoundImg from '../../Images/404.jpg';
const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                       <h3 style={{fontSize:'40px',color:'red',padding:'25px 0'}}>Page not found</h3>
                       <img style={{width:'100%'}} src={notFoundImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;