import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import InstagramEmbed from 'react-instagram-embed';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import logo from './images/logo.JPG'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  document.title = "Cindylus Creations"
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
        <Nav.Link href="#link">Contact</Nav.Link>
        <Nav.Link href="#link">Custom</Nav.Link>
        <NavDropdown title="Animals" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Birds</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Dogs</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Penguins</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Disney" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Ariel</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Belle</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Cinderella</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Coco</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Dumbo</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Grogu (Baby Yoda)</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Groot</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Jasmine</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Micky Mouse</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Minnie Mouse</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Stitch</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Winnie the Pooh</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Movies" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Jurassic Park</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Transformers</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Music" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Bad Bunny</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Billie Ellish</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Ice Cube</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Selena</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Nature" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Flowers</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="TV" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Stranger Things</NavDropdown.Item>
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


  <Carousel>
  <Carousel.Item>
    <img
      className="carousel-image"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-image"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel-image"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    <Router>
    <Switch>
    {/* <Route exact path = '/' render = {renderLandingPage} /> */}
    </Switch>

    </Router>


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
