import InstagramEmbed from 'react-instagram-embed';
// import  from 'react-bootstrap/Navbar'
import React from 'react';
import './App.css';
// import {Nav, NavDropdown, Navbar, Container}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
function App() {
  return (
        <div className="background">
  <Container>
          <Navbar fixed="top" bg="light" expand="lg">
    <Navbar.Brand href="https://cindylus-creations.herokuapp.com/">Cindylus Creations</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="https://cindylus-creations.herokuapp.com/">Home</Nav.Link>
        <Nav.Link href="#link">About Me</Nav.Link>
        <NavDropdown title="Sports" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Las Vegas Golden Knights</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Las Vegas Raiders</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Los Angeles Dodgers</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Los Angeles Lakers</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </Container>

  <InstagramEmbed
  url='https://www.instagr.am/p/CA3aDJ7HlTE/'
  clientAccessToken='824595361729122|1e7b57740da098e528aa20e8ea739d21'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}

/>
        
     </div>
     
  );
}

export default App;
