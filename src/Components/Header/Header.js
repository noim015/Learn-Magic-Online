import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = {
        background: "#000000",
        color: "#7e8489"
    }
    return (
        <div>
           <div className="header_navigration">
                <Navbar bg="dark" expand="lg" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">Learn Magic Online</Navbar.Brand>
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