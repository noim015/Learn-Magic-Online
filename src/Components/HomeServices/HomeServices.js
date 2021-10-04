import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const HomeServices = (props) => {
    // Card Style CSS
    const cardSetting = {
        margin: "10px 0",
    }
    // Card Sub Title CSS
    const cardSubTitle = {
        color: '#084298',
        fontSize: '18px',
        fontWeight: '700',
        float: 'left',
        paddingTop: '5px'
    }
    const {title, fee, description, cover_img} = props.data;
    return (
            <Col md={3} style={cardSetting}>
            <Card>
            <Card.Img variant="top" src={cover_img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {description.substr(0,145)}... </Card.Text>
                <Row><Col><div style={cardSubTitle}>{ fee }</div></Col> <Col><Button variant="warning">View Details</Button></Col> </Row>
            </Card.Body>
            </Card>
            </Col>
    );
};

export default HomeServices;