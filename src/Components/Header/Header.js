import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useSpring, animated } from 'react-spring';
const Header = () => {
     //Animation for logo
      const props = useSpring({ 
                    from:{
                        opacity:0,
                        transform: 'translate(-4000px, 0)',
                    },
                    opacity:1,
                    transform: 'translate(0px, 0)',
                });

    return (
        <div> 
           <div className="header_navigration">
                <Navbar bg="dark" expand="lg" variant="dark">
                        <Container>
                            <animated.div style={props}> 
                                <NavLink style={{textDecoration:'none',color:'#fff',fontSize:'25px'}} to="/">Learn Magic Online</NavLink>
                            </animated.div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                                    <NavLink activeClassName="active" to="/services">Services</NavLink>
                                    <NavLink activeClassName="active" to="/reviews">Reviews</NavLink>
                                    <NavLink activeClassName="active" to="/about">About</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                </Navbar>
           </div>           
        </div>
    );
};

export default Header;