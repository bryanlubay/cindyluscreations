// Product type (Apparel / Cups / Flowers / Party Decorations / Vinyl)
// -- Category (Animals / Anime / Disney / Movies / Music / Nature / TV / Video Games / HOLIDAY)
// ---- Specific (Bad Bunny, Naruto, Grogu, etc) = Popover right

import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
// import InstagramEmbed from 'react-instagram-embed';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Overlay from 'react-bootstrap/Overlay'
import { BrowserRouter as Router, Route, /*Redirect,*/ Switch } from 'react-router-dom';
import { OverlayTrigger } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover'
import ListGroup from 'react-bootstrap/ListGroup'

// import logo from './images/logo.JPG'
// import hats1 from './images/heat_press/hats1.jpg'
// import mylittlepony1 from './images/party_decorations/mylittlepony1.jpg'
// import flowers1 from './images/flowers/flowers1.jpg'
// import grogu1 from './images/cups/grogu1.jpg'
// import vinyl1 from './images/vinyl/vinyl1.jpg'

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

              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/custom">Custom</Nav.Link>
              <NavDropdown title="Cups" id="basic-nav-dropdown">
                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Birds</ListGroup.Item>
                          <ListGroup.Item className="li">Dogs</ListGroup.Item>
                          <ListGroup.Item className="li">Penguins</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>
                  <NavDropdown.Item >Animals</NavDropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Naruto</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>
                  <NavDropdown.Item >Anime</NavDropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Ariel</ListGroup.Item>
                          <ListGroup.Item className="li">Belle</ListGroup.Item>
                          <ListGroup.Item className="li">Cinderella</ListGroup.Item>
                          <ListGroup.Item className="li">Coco</ListGroup.Item>
                          <ListGroup.Item className="li">Dumbo</ListGroup.Item>
                          <ListGroup.Item className="li">Grogu (Baby Yoda)</ListGroup.Item>
                          <ListGroup.Item className="li">Groot</ListGroup.Item>
                          <ListGroup.Item className="li">Jasmine</ListGroup.Item>
                          <ListGroup.Item className="li">Micky Mouse</ListGroup.Item>
                          <ListGroup.Item className="li">Minnie Mouse</ListGroup.Item>
                          <ListGroup.Item className="li">Stitch</ListGroup.Item>
                          <ListGroup.Item className="li">Winnie the Pooh</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>

                  <NavDropdown.Item >Disney</NavDropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Jurassic Park</ListGroup.Item>
                          <ListGroup.Item className="li">Transformers</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>
                  <NavDropdown.Item >Movies</NavDropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Bad Bunny</ListGroup.Item>
                          <ListGroup.Item className="li">Billie Ellish</ListGroup.Item>
                          <ListGroup.Item className="li">Ice Cube</ListGroup.Item>
                          <ListGroup.Item className="li">Selena</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>
                  <NavDropdown.Item >Music</NavDropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Flowers</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>
                  <NavDropdown.Item >Nature</NavDropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Las Vegas Golden Knights</ListGroup.Item>
                          <ListGroup.Item className="li">Las Vegas Raiders</ListGroup.Item>
                          <ListGroup.Item className="li">Los Angeles Dodgers</ListGroup.Item>
                          <ListGroup.Item className="li">Los Angeles Lakers</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>
                  <NavDropdown.Item>Sports</NavDropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Stranger Things</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>
                  <NavDropdown.Item >TV</NavDropdown.Item>
                </OverlayTrigger>

                <NavDropdown.Item href="/cups">Valentine's Day</NavDropdown.Item>
                {/* <NavDropdown.Item href="/cups">Video Games</NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="Heat Press" id="basic-nav-dropdown">
                <NavDropdown.Item href="/apparel">Hats</NavDropdown.Item>
                <NavDropdown.Item href="/apparel">Make Up Bags</NavDropdown.Item>
                <NavDropdown.Item href="/apparel">Pencil Bags</NavDropdown.Item>
                <NavDropdown.Item href="/apparel">Shirts</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/contact">Laser</Nav.Link>
              <Nav.Link href="/flowers">Flowers</Nav.Link>

              <NavDropdown title="Party Decorations" id="basic-nav-dropdown">
                <NavDropdown.Item href="/apparel">Banners</NavDropdown.Item>
                <NavDropdown.Item href="/apparel">Center Pieces</NavDropdown.Item>
                <NavDropdown.Item href="/apparel">Cake Toppers</NavDropdown.Item>
                <NavDropdown.Item href="/apparel">Goodie Bags</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/valentines_day">Valentine's Day</Nav.Link>
              <Nav.Link href="/vinyl">Vinyl</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>


      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/grogu1.jpg"
            alt="First slide"
          /><br></br>
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/vinyl/vinyl1.jpg"
            alt="Second slide"
          /><br></br>

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/flowers/flowers1.jpg"
            alt="Third slide"
          /><br></br>

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Router>
        <Switch>
          {/* <Route exact path = '/' render = {renderLandingPage} /> */}
          <Route path='/about_me' />
          <Route path='/contact' />
          <Route path='/custom' />
          <Route path='/animals' />
          <Route path='/disney' />
          <Route path='/movies' />
          <Route path='/music' />
          <Route path='/nature' />
          <Route path='/tv' />
          <Route path='/valentines_day' />
          <Route path='/sports' />
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


/**************************************/















