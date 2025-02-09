import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavMenu({ user }) {
  return (
   <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/login">Destination Trivia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Log-in</Nav.Link>
            <Nav.Link href="/signup">Sign-up</Nav.Link>
          </Nav>
          {user && (
            <Nav>
              <Nav.Link href="#" disabled>{user.user_email}</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}