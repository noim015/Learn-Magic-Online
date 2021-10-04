import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Body.css';
import slide1 from '../../Images/slide1.jpg';
import slide2 from '../../Images/slide2.jpg';
import slide3 from '../../Images/slide3.jpg';
import Services from '../Services/Services';
const Body = () => {
    
    return (
        <div>

        <div className="slider">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide2}
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide3}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>
           </div>
        <div className="featers">
                <Container>
                    <Row>
                       <Col md={4}>
                            <Card className="myCard">
                                    <Card.Body>
                                    <Card.Title> Online Training </Card.Title>
                                    <Card.Text>
                                        We provide our training through zoom apps so anyone from anywhere easily can get our services if he/she has mobile phone or PC alongside a minimal internat connection.
                                    </Card.Text>
                                    </Card.Body>
                            </Card>
                       </Col>
                       <Col md={4}>
                            <Card className="myCard" >
                                <Card.Body>
                                <Card.Title> 24/7 Supports </Card.Title>
                                <Card.Text>
                                    If someone can not cover the course properly or don't understand then we halp to overcome the obstacle through the teamviewer apps showing everything on his/her PC.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                       </Col>
                       <Col md={4}>
                            <Card className="myCard">
                                <Card.Body>
                                <Card.Title>Class Videos Provided </Card.Title>
                                <Card.Text>
                                    Our courses are designed for everyone for example a student , a job holder , a housewhife anyone can enroll on our courses and we have EMI system to make payment for the course.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                       </Col>
                    </Row>
                </Container>
  

           </div>
           <div className="services">
               <h1>Our Services</h1>
               
           </div>
           </div>
    );
};

export default Body;