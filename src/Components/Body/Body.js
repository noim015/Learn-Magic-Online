import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Body.css';
import { useSpring, animated } from 'react-spring';
import slide1 from '../../Images/slide1.jpg';
import slide2 from '../../Images/slide2.jpg';
import slide3 from '../../Images/slide3.jpg';
const Body = () => {
    //Animation settings for card
    const props = useSpring({loop: true,
        to: [
          { opacity: 1},
          { opacity: 0.9},
        ],
        from: { opacity: 0.7},});
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
                                    <h3 style={{color:'#fff'}}>Seven tricks to keep you busy during this unusual period.</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={slide2}
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h3 style={{color:'#fff'}}>Are you ready to move your magic journey forward?</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={slide3}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3 style={{color:'#fff'}}>Seven tricks to keep you busy during this unusual period.</h3>
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
                                   <animated.div style={props}>
                                        <Card className="myCard" >
                                            <Card.Body>
                                            <Card.Title> 24/7 Supports </Card.Title>
                                            <Card.Text>
                                                If someone can not cover the course properly or don't understand then we halp to overcome the obstacle through the teamviewer apps showing everything on his/her PC.
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </animated.div>
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
      </div>
    );
};

export default Body;