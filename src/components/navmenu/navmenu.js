import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './navmenu.css';

function NavMenu() {
  return (
    <Navbar bg="secondary" expand="sm" className="nav">
      <Container>
        <Navbar.Brand>
          <Link className="navbar-brand" to='/'>Etta Haselden</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="work">Work</Link>
            <Link className="nav-link" to="about">About</Link>
            <Link className="nav-link" to="contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMenu;