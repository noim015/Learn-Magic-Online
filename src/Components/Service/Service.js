import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Service = (props) => {
    const cardSetting = {
        margin: "10px 0",
    }
    const cardSubTitle = {
        color: '#084298',
        fontSize: '18px',
        fontWeight: '700',
        float: 'left',
        paddingTop: '5px'
    }
    const {title, fee, description, trainer, trainer_img, cover_img, review} = props.data;
    return (
        
            
               
            <Col md={3} style={cardSetting}>
            <Card>
            <Card.Img variant="top" src={cover_img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {description.substr(0,145)}... </Card.Text>
                <Row><Col><div style={cardSubTitle}>{ fee }</div></Col> <Col><Button variant="warning">View Details</Button></Col> </Row>
                <Col></Col>
            </Card.Body>
            </Card>
            </Col>
        
             
        
    );
};

export default Service;