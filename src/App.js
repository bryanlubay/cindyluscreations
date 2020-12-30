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
        <Nav.Link href="/about_me">About Me</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/custom">Custom</Nav.Link>
        <NavDropdown title="Animals" id="basic-nav-dropdown">
          <NavDropdown.Item href="/animals">Birds</NavDropdown.Item>
          <NavDropdown.Item href="/animals">Dogs</NavDropdown.Item>
          <NavDropdown.Item href="/animals">Penguins</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Disney" id="basic-nav-dropdown">
          <NavDropdown.Item href="/disney">Ariel</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Belle</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Cinderella</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Coco</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Dumbo</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Grogu (Baby Yoda)</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Groot</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Jasmine</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Micky Mouse</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Minnie Mouse</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Stitch</NavDropdown.Item>
          <NavDropdown.Item href="/disney">Winnie the Pooh</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Movies" id="basic-nav-dropdown">
          <NavDropdown.Item href="/movies">Jurassic Park</NavDropdown.Item>
          <NavDropdown.Item href="/movies">Transformers</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Music" id="basic-nav-dropdown">
          <NavDropdown.Item href="/music">Bad Bunny</NavDropdown.Item>
          <NavDropdown.Item href="/music">Billie Ellish</NavDropdown.Item>
          <NavDropdown.Item href="/music">Ice Cube</NavDropdown.Item>
          <NavDropdown.Item href="/music">Selena</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Nature" id="basic-nav-dropdown">
          <NavDropdown.Item href="/flowers">Flowers</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="TV" id="basic-nav-dropdown">
          <NavDropdown.Item href="/tv">Stranger Things</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#link">Valentine's Day</Nav.Link>
        <NavDropdown title="Sports" id="basic-nav-dropdown">
          <NavDropdown.Item href="/sports">Las Vegas Golden Knights</NavDropdown.Item>
          <NavDropdown.Item href="/sports">Las Vegas Raiders</NavDropdown.Item>
          <NavDropdown.Item href="/sports">Los Angeles Dodgers</NavDropdown.Item>
          <NavDropdown.Item href="/sports">Los Angeles Lakers</NavDropdown.Item>
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
      <Route path = '/about_me'  />
      <Route path = '/contact'  />
      <Route path = '/custom'  />
      <Route path = '/animals'  />
      <Route path = '/disney'  />
      <Route path = '/movies'  />
      <Route path = '/music'  />
      <Route path = '/nature'  />
      <Route path = '/tv'  />
      <Route path = '/valentines_day'  />
      <Route path = '/sports'  />
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
