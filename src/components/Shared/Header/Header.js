import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../context/useAuth';
import logoImg from '../../../images/alphamark.png'
import './Header.css'

const Header = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div className="header-container py-2">
            <Navbar variant="dark" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className="img-fluid rounded w-50" src={logoImg} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="ms-auto text-white">
                            <Navbar.Text>
                                <a href="#login"> {user?.displayName}</a>
                            </Navbar.Text>
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                            {user?.email ?
                                <Button onClick={handleLogout} variant="light" className="mx-3">Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;