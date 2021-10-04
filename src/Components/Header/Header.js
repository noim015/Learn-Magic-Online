import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useSpring, animated,flip,config,set } from 'react-spring';
const Header = () => {
    // Navigration active button css
    const activeStyle = {
        background: "#000000",
        color: "#7e8489"
    }
     //Animation for logo
    const props = useSpring({  to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 100,
        config: config.molasses,
        onRest: () => set(!flip), });
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
                                <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                                <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
                                <NavLink activeStyle={activeStyle} to="/reviews">Reviews</NavLink>
                                <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                            </Nav>
                            </Navbar.Collapse>
                            
                        </Container>
                </Navbar>
           </div>           
        </div>
    );
};

export default Header;