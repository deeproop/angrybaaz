import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#243658"}} variant="dark">
      <Container>
        <Navbar.Brand href="#home">ANGRYBAAZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link href="#memes">Orders</Nav.Link>
            <Nav.Link href="#deets">Saved Designs</Nav.Link>
            <Nav.Link href="#deets">Create Enquiry</Nav.Link>
            <Nav.Link bg="danger" href="#deets">Requested Quote</Nav.Link>
            <Button variant="danger">Logout</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}