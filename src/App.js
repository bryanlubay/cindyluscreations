// Product type (Apparel / Cups / Flowers / Party Decorations / Vinyl)
// -- Category (Animals / Anime / Disney / Movies / Music / Nature / TV / Video Games / HOLIDAY)
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
import Overlay from 'react-bootstrap/Overlay'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// import { Popover } from 'bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
// import { Popover } from 'bootstrap';
import Popover from 'react-bootstrap/Popover'

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
        <NavDropdown title="Apparel" id="basic-nav-dropdown">
          <NavDropdown.Item href="/apparel">Hats</NavDropdown.Item>
          <NavDropdown.Item href="/apparel">Shirts</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="/categories/#animals">Animals</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Anime</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Disney</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Movies</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Music</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Nature</NavDropdown.Item>
          <NavDropdown.Item href="/categories">TV</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Valentine's Day</NavDropdown.Item>
          <NavDropdown.Item href="/categories">Video Game</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/custom">Custom</Nav.Link>
        {/* <NavDropdown title="Apparel" id="basic-nav-dropdown">
          <NavDropdown.Item href="/apparel">1</NavDropdown.Item>
        </NavDropdown> */}


        <NavDropdown title="Cups12" id="basic-nav-dropdown">



              <OverlayTrigger trigger='hover' placement='right'
              overlay={
                // <Tooltip>Hi</Tooltip>

                // <Popover></Popover>
                // <h1>hello</h1>
              <Popover>
                <Popover.Title>Title</Popover.Title>
                <Popover.Content>
                  Dogs
                </Popover.Content>
              </Popover>
              }
              >            
            <NavDropdown.Item href="/cups">Animals</NavDropdown.Item>



              </OverlayTrigger> 
            



          <NavDropdown.Item href="/cups">Anime</NavDropdown.Item>
          <NavDropdown.Item href="/cups">Disney</NavDropdown.Item>
          <NavDropdown.Item href="/cups">Movies</NavDropdown.Item>
          <NavDropdown.Item href="/cups">Music</NavDropdown.Item>
          <NavDropdown.Item href="/cups">Nature</NavDropdown.Item>
          <NavDropdown.Item href="/cups">TV</NavDropdown.Item>
          <NavDropdown.Item href="/cups">Valentine's Day</NavDropdown.Item>
          <NavDropdown.Item href="/cups">Video Game</NavDropdown.Item>
        </NavDropdown>
        {/* <NavDropdown title="Flowers" id="basic-nav-dropdown">
          <NavDropdown.Item href="/flowers">1</NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="/flowers">Flowers</Nav.Link>

        {/* <NavDropdown title="Party Decorations" id="basic-nav-dropdown">
          <NavDropdown.Item href="/party_decorations">1</NavDropdown.Item>
        </NavDropdown> */}
        <NavDropdown title="Party Decorations" id="basic-nav-dropdown">
          <NavDropdown.Item href="/apparel">Center Pieces</NavDropdown.Item>
          <NavDropdown.Item href="/apparel">Coke Toppers</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="/valentines_day">Valentine's Day</Nav.Link>
        {/* <NavDropdown title="Vinyl" id="basic-nav-dropdown">
          <NavDropdown.Item href="/vinyl">1</NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="/vinyl">Vinyl</Nav.Link>



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
{/* <h1>2</h1> */}
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
