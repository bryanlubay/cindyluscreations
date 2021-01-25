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

import About_me from './components/about_me/about_me' // fix to capitals later
import Contact from './components/Contact/Contact'
import Cups from './components/Cups/Cups'
import Custom from './components/Custom/Custom'
import Flowers from './components/Flowers/Flowers'
import Heat_Press from './components/Heat_Press/Heat_Press'
import Laser from './components/Laser/Laser'
import Party_Decorations from './components/Party_Decorations/Party_Decorations'
import Vinyl from './components/Vinyl/Vinyl'

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
                  <NavDropdown.Item href="/cups/animals">Animals</NavDropdown.Item>
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
                  <NavDropdown.Item href="/cups/anime">Anime</NavDropdown.Item>
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

                  <NavDropdown.Item href="/cups/disney">Disney</NavDropdown.Item>
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
                  <NavDropdown.Item href="/cups/movies">Movies</NavDropdown.Item>
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
                  <NavDropdown.Item href="/cups/music">Music</NavDropdown.Item>
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
                  <NavDropdown.Item href="/cups/nature">Nature</NavDropdown.Item>
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
                  <NavDropdown.Item href="/cups/sports">Sports</NavDropdown.Item>
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
                  <NavDropdown.Item href="/cups/tv">TV</NavDropdown.Item>
                </OverlayTrigger>

                <NavDropdown.Item href="/cups">Valentine's Day</NavDropdown.Item>
                {/* <NavDropdown.Item href="/cups">Video Games</NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="Heat Press" id="basic-nav-dropdown">
                <NavDropdown.Item href="/heat_press/hats">Hats</NavDropdown.Item>
                <NavDropdown.Item href="/heat_press/make_up_bags">Make Up Bags</NavDropdown.Item>
                <NavDropdown.Item href="/heat_press/pencil_bags">Pencil Bags</NavDropdown.Item>
                <NavDropdown.Item href="/heat_press/shirts">Shirts</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/laser">Laser</Nav.Link>
              <Nav.Link href="/flowers">Flowers</Nav.Link>

              <NavDropdown title="Party Decorations" id="basic-nav-dropdown">
                <NavDropdown.Item href="/party_decorations/banners">Banners</NavDropdown.Item>
                <NavDropdown.Item href="/party_decorations/center_pieces">Center Pieces</NavDropdown.Item>
                <NavDropdown.Item href="/party_decorations/cake_toppers">Cake Toppers</NavDropdown.Item>
                <NavDropdown.Item href="/party_decorations/goodie_bags">Goodie Bags</NavDropdown.Item>
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
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/laser/backpack1.jpg"
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
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/heat_press/hats1.jpg"
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
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/vinyl/vinyl1.jpg"
            alt="Third slide"
          /><br></br>

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/mylittlepony1.jpg"
            alt="Third slide"
          /><br></br>

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      {/* component = add to bottom, render =  */}

      <h1>Home 12:23</h1>
      <Router>
        <Switch>
          {/* <Route exact path = '/' render = {renderLandingPage} /> */}
          {/* <Route path='/' render={}/>  */}
          <Route path='/about_me' component={About_me}/> 
          <Route path='/contact' component={Contact} />
          <Route path='/custom' component={Custom}/>
          <Route path='/cups' component={Cups}/>
          <Route path='/cups/animals' component={Cups}/>
          <Route path='/cups/anime' component={Cups}/>
          <Route path='/cups/disney' component={Cups}/>
          <Route path='/cups/movies' component={Cups}/>
          <Route path='/cups/music' component={Cups}/>
          <Route path='/cups/flowers' component={Cups}/>
          <Route path='/cups/sports' component={Cups}/>
          <Route path='/cups/tv' component={Cups}/>
          <Route path='/cups/valentines_day' component={Cups}/>

          <Route path='/heat_press' component={Heat_Press}/>
          <Route path='/laser' component={Laser}/>
          <Route path='/flowers' component={Flowers}/>
          <Route path='/party_decorations' component={Party_Decorations}/>
          <Route path='/valentines_day'/>
          <Route path='/vinyl' component={Vinyl}/>
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















