// Product type (Apparel / Cups / Flowers / Party Decorations / Vinyl)
// -- Category (Animals / Disney / Movies / Music / Nature / TV / HOLIDAY)
// ---- Specific (Bad Bunny, Naruto, Grogu, etc) = Popover right

import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
// import InstagramEmbed from 'react-instagram-embed';
import logo from './images/logo.JPG'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  document.title = "Cindylus Creations"
  return (
        <div className="background">
          <body className="body">

          </body>
  <Container>
          <Navbar fixed="top" bg="light" expand="lg">
    <Navbar.Brand href="https://cindylus-creations.herokuapp.com/">Cindylus Creations</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="https://cindylus-creations.herokuapp.com/">Home</Nav.Link>
        <Nav.Link href="/about_me">About Me</Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="/categories">Animals</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Disney</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Movies</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Music</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Nature</NavDropdown.Item>
          <NavDropdown.Item href="/categories">TV</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Valentine's Day</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/custom">Custom</Nav.Link>
        <NavDropdown title="Apparel" id="basic-nav-dropdown">
          <NavDropdown.Item href="/apparel">1</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Cups" id="basic-nav-dropdown">
          <NavDropdown.Item href="/cups">1</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Flowers" id="basic-nav-dropdown">
          <NavDropdown.Item href="/flowers">1</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Party Decorations" id="basic-nav-dropdown">
          <NavDropdown.Item href="/party_decorations">1</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Vinyl" id="basic-nav-dropdown">
          <NavDropdown.Item href="/vinyl">1</NavDropdown.Item>
        </NavDropdown>



{/* 
        <NavDropdown title="Animals" id="basic-nav-dropdown">
          <NavDropdown.Item href="/animals#birds">Birds</NavDropdown.Item>
          <NavDropdown.Item href="/animals#dogs">Dogs</NavDropdown.Item>
          <NavDropdown.Item href="/animals#penguins">Penguins</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Disney" id="basic-nav-dropdown">
          <NavDropdown.Item href="/disney#ariel">Ariel</NavDropdown.Item>
          <NavDropdown.Item href="/disney#belle">Belle</NavDropdown.Item>
          <NavDropdown.Item href="/disney#cinderella">Cinderella</NavDropdown.Item>
          <NavDropdown.Item href="/disney#coco">Coco</NavDropdown.Item>
          <NavDropdown.Item href="/disney#dumbo">Dumbo</NavDropdown.Item>
          <NavDropdown.Item href="/disney#grogu">Grogu (Baby Yoda)</NavDropdown.Item>
          <NavDropdown.Item href="/disney#groot">Groot</NavDropdown.Item>
          <NavDropdown.Item href="/disney#jasmine">Jasmine</NavDropdown.Item>
          <NavDropdown.Item href="/disney#micky_mouse">Micky Mouse</NavDropdown.Item>
          <NavDropdown.Item href="/disney#minnie_mouse">Minnie Mouse</NavDropdown.Item>
          <NavDropdown.Item href="/disney#stitch">Stitch</NavDropdown.Item>
          <NavDropdown.Item href="/disney#winnie_the_pooh">Winnie the Pooh</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Movies" id="basic-nav-dropdown">
          <NavDropdown.Item href="/movies#jurassic_park">Jurassic Park</NavDropdown.Item>
          <NavDropdown.Item href="/movies#transformers">Transformers</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Music" id="basic-nav-dropdown">
          <NavDropdown.Item href="/music#bad_bunny">Bad Bunny</NavDropdown.Item>
          <NavDropdown.Item href="/music#billie_ellish">Billie Ellish</NavDropdown.Item>
          <NavDropdown.Item href="/music#ice_cube">Ice Cube</NavDropdown.Item>
          <NavDropdown.Item href="/music#selena">Selena</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Nature" id="basic-nav-dropdown">
          <NavDropdown.Item href="/nature#flowers">Flowers</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="TV" id="basic-nav-dropdown">
          <NavDropdown.Item href="/tv#stranger_things">Stranger Things</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#link">Valentine's Day</Nav.Link>
        <NavDropdown title="Sports" id="basic-nav-dropdown">
          <NavDropdown.Item href="/sports#las_vegas_golden_knights">Las Vegas Golden Knights</NavDropdown.Item>
          <NavDropdown.Item href="/sports#las_vegas_raiders">Las Vegas Raiders</NavDropdown.Item>
          <NavDropdown.Item href="/sports#los_angeles_dodgers">Los Angeles Dodgers</NavDropdown.Item>
          <NavDropdown.Item href="/sports#los_angeles_lakers">Los Angeles Lakers</NavDropdown.Item>
        </NavDropdown> */}
        
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
    /><br></br>
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
    /><br></br>

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
    /><br></br>

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

{/* <h1>1</h1>
  <InstagramEmbed
  url='https://www.instagr.am/p/CA3aDJ7HlTE/'
  clientAccessToken='413905563134913|1e7b57740da098e528aa20e8ea739d21'
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
        <h1>2</h1> */}
     </div>
     
  );
}

export default App;
