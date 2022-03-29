import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const {logOut,user} = useAuth();
    return (
        <div>
            <Navbar expand="lg">
  <Container>
    <Navbar.Brand as={HashLink} to="/home" ><img src="https://i.ibb.co/dByV0hB/logo.png" width="200px" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto menu">
        <Nav.Link as={HashLink} to="/home" active >Home</Nav.Link>
        <Nav.Link as={HashLink} to="/products" active>Shop</Nav.Link>
        <Nav.Link as={HashLink} to="/home" active>Blog</Nav.Link>
        <Nav.Link as={HashLink} to="/home" active>About us</Nav.Link>
      </Nav>
      <div className="ms-auto">
        {
          user?.email ? <button onClick={logOut} className="btn btn-info">Logout</button> :
          <div className='auth'><Link className='border-bottom' to='/login'>Login</Link>
          <Link className='border-bottom' to='/register'>Register</Link></div>
        }
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;