import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">PortFolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className='text-light m-2'  to="/">Home</Link>

    <Link className='text-light m-2' to="/contact">Contact</Link>
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       
    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //    <div class="container">
    //     {/* <Link to='/home' class="navbar-brand"><img src={logo} alt=""/></Link> */}
    //     <button class="navbar-toggler navbar-toggat" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon hamburger-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    //        <ul class="navbar-nav mb-2 mb-lg-0 mx-auto pt-4">
    //        <li class="nav-item">
    //                 <Link  to="/">Home</Link>
    //             </li>
    //        <li class="nav-item">
    //                 <Link  to="/contact">Contact</Link>
    //             </li>
    //        </ul>
    //        </div>
    //     </div>
    //   </nav>
    );
};

export default NavBar;