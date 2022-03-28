import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src="https://i.ibb.co/dByV0hB/logo.png" width="200px" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto menu">
        <Nav.Link active href="#home">Home</Nav.Link>
        <Nav.Link active href="#link">Shop</Nav.Link>
        <Nav.Link active href="#link">Blog</Nav.Link>
        <Nav.Link active href="#link">About us</Nav.Link>
      </Nav>
      <div className="ms-auto auth">
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;