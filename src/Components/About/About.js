import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutUs from '../../Images/aboutus.jpg';
import about1 from '../../Images/about1.jpg';
import about2 from '../../Images/about2.jpg';
import about3 from '../../Images/about3.jpg';
import about4 from '../../Images/about4.jpg';
import about5 from '../../Images/about5.jpg';
import './About.css';
const About = () => {
    return (
        <div className="aboutUs">
            <h1>About Us</h1>
            <Container>
                <Row>
                    <Col md={6}>
                       <img style={{width:'100%'}} src={aboutUs} alt="" />
                    </Col>
                    <Col md={6}>
                        <div className="aboutText">
                            <p>
                            Are you ready to move your magic journey forward? These online classes from Learn Magic School dive into a range of techniques and topics, including basic magic tricks, street magic, card tricks, and sleight of hand. Whether you’re a beginner trying out easy magic tricks for the first time, or you’re experienced with magic techniques, these online tutorials can help you find inspiration and learn new ways to improve your magic performances. Learn how to read tarot cards, amaze and impress your friends, and perform at parties. Taught by experts, experienced and working magicians, these classes are broken down into short lessons, with the support of a creative community to help you advance your skills.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row style={{margin:'10px 0 0 0'}}>
                    <Col md={4} ><img style={{width:'100%'}} src={about1} alt="" /></Col>
                    <Col md={4} ><img style={{width:'100%'}} src={about2} alt="" /></Col>
                    <Col md={4} ><img style={{width:'100%'}} src={about3} alt="" /></Col>
                </Row>
                <Row style={{margin:'10px 0 0 0'}}>
                    <Col md={4} ><img style={{width:'100%'}} src={about4} alt="" /></Col>
                    <Col md={4} ><img style={{width:'100%'}} src={about5} alt="" /></Col>
                    <Col md={4} ><img style={{width:'100%'}} src={aboutUs} alt="" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;