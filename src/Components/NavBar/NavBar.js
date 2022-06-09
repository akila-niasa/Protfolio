import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark">
  <Container>
  <Navbar.Brand href="#home">PortFolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav-item">
    <Link className='text-light m-2 nav-link'  to="/">Home</Link>

    <Link className='text-light m-2 nav-link' to="/contact">Contact</Link>
      

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
    );
};

export default NavBar;