import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
const Navbars = () => {
    return (
        <Navbar bg="" expand="lg">
            <Navbar.Brand>
                <Link to="/" id="header-logo">
                    <img src={logo} alt="logo.png" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav className="nav-menu">
                        <Link to="/home" className="nav-item">Home</Link>
                    </Nav>
                    <Nav className="nav-menu">
                        <Link to="/" className="nav-item">Our Portfolio</Link>
                    </Nav>
                    <Nav className="nav-menu">
                        <Link to="/" className="nav-item">Our Team</Link>
                    </Nav>
                    <Nav className="nav-menu">
                        <Link to="/" className="nav-item">Contact Us</Link>
                    </Nav>
                    <Nav className="nav-menu">
                        <Link to="/login" className="login-btn">Login</Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbars;