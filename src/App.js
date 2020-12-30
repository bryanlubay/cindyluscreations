import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import InstagramEmbed from 'react-instagram-embed';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'

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
        <Nav.Link href="#link">Custom</Nav.Link>
        <NavDropdown title="Disney" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">3</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Movies" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">3</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Music" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">2</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">3</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Valentine's Day</Nav.Link>
        <NavDropdown title="Sports" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Las Vegas Golden Knights</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Las Vegas Raiders</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Los Angeles Dodgers</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Los Angeles Lakers</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </Container>
    <Button>WTF2</Button>




  {/* <InstagramEmbed
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

/> */}
        
     </div>
     
  );
}

export default App;
