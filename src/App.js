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
// import {Animals, Anime, Cups, Disney, Movies, Music, Nature, Sports, TV}  from './components/Cups/'
import Animals from './components/Cups/Animals'
import Anime from './components/Cups/Anime'
import Cups from './components/Cups/Cups'
import Disney from './components/Cups/Disney'
import Movies from './components/Cups/Movies'
import Music from './components/Cups/Music'
import Nature from './components/Cups/Nature'
import Sports from './components/Cups/Sports'
import TV from './components/Cups/TV'
import Custom from './components/Custom/Custom'
import Flowers from './components/Flowers/Flowers'


// import {Hats, Heat_Press, Make_Up_Bags, Pencil_Bags, Shirts} from './components/Heat_Press/Heat_Press'
import Hats from './components/Heat_Press/Hats'
import Heat_Press from './components/Heat_Press/Heat_Press'
import Make_Up_Bags from './components/Heat_Press/Make_Up_Bags'
import Pencil_Bags from './components/Heat_Press/Pencil_Bags'
import Shirts from './components/Heat_Press/Shirts'


import Laser from './components/Laser/Laser'
// import {Banners, Cake_Toppers, Goodie_Bags, Party_Decorations} from './components/Party_Decorations/Party_Decorations'
import Banners from './components/Party_Decorations/Banners'
import Cake_Toppers from './components/Party_Decorations/Cake_Toppers'
import Goodie_Bags from './components/Party_Decorations/Goodie_Bags'
import Party_Decorations from './components/Party_Decorations/Party_Decorations'

import Vinyl from './components/Vinyl/Vinyl'
import Landing_Page from './components/Landing_Page/Landing_Page'
import Center_Pieces from './components/Party_Decorations/Center_Pieces';

function App() {
  document.title = "Cindylus Creations"
  return (
    <div className="background">
      <html className="html"></html>
      <body className="body"></body>
      <Container>
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand className="nav-main-font" href="https://cindylus-creations.herokuapp.com/">Cindylu's Creations</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Nav.Link className="nav-font" href="/">Home</Nav.Link>
              <Nav.Link className="nav-font" href="/about_me">About Me</Nav.Link>
              <Nav.Link className="nav-font" href="/contact">Contact</Nav.Link>
              <Nav.Link className="nav-font" href="/custom">Custom</Nav.Link>

              <NavDropdown className="nav-font" title="Cups" id="basic-nav-dropdown">
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
                    </Popover>}>
                  <NavDropdown.Item className="nav-font" href="/cups/animals">Animals</NavDropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Naruto</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>}>
                  <NavDropdown.Item className="nav-font" href="/cups/anime">Anime</NavDropdown.Item>
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
                    </Popover>}>
                  <NavDropdown.Item className="nav-font" href="/cups/disney">Disney</NavDropdown.Item>
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
                    </Popover>}>
                  <NavDropdown.Item className="nav-font" href="/cups/movies">Movies</NavDropdown.Item>
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
                  <NavDropdown.Item className="nav-font" href="/cups/music">Music</NavDropdown.Item>
                </OverlayTrigger>

                {/* <OverlayTrigger trigger='hover' placement='right'
                  overlay={
                    <Popover>
                      <Popover.Content>
                        <ListGroup className="list-group" variant="flush">
                          <ListGroup.Item className="li">Flowers</ListGroup.Item>
                        </ListGroup>
                      </Popover.Content>
                    </Popover>
                  }>
                  <NavDropdown.Item className="nav-font" href="/cups/nature">Nature</NavDropdown.Item>
                </OverlayTrigger> */}

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
                  <NavDropdown.Item className="nav-font" href="/cups/sports">Sports</NavDropdown.Item>
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
                  <NavDropdown.Item className="nav-font" href="/cups/tv">TV</NavDropdown.Item>
                </OverlayTrigger>

                {/* <NavDropdown.Item className="nav-font" href="/cups">Valentine's Day</NavDropdown.Item> */}
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item className="nav-font" href="/cups/">See all</NavDropdown.Item>
                {/* <NavDropdown.Item className="nav-font" href="/cups">Video Games</NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown className="nav-font" title="Heat Press" id="basic-nav-dropdown">
                <NavDropdown.Item className="nav-font" href="/heat_press/hats">Hats</NavDropdown.Item>
                {/* <NavDropdown.Item className="nav-font" href="/heat_press/make_up_bags">Make Up Bags</NavDropdown.Item>
                <NavDropdown.Item className="nav-font" href="/heat_press/pencil_bags">Pencil Bags</NavDropdown.Item>
                <NavDropdown.Item className="nav-font" href="/heat_press/shirts">Shirts</NavDropdown.Item> */}
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item className="nav-font" href="/heat_press/">See all</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="nav-font" href="/laser">Laser</Nav.Link>
              <Nav.Link className="nav-font" href="/flowers">Flowers</Nav.Link>

              <NavDropdown className="nav-font" title="Party Decorations" id="basic-nav-dropdown">
                <NavDropdown.Item className="nav-font" href="/party_decorations/banners">Banners</NavDropdown.Item>
                <NavDropdown.Item className="nav-font" href="/party_decorations/center_pieces">Center Pieces</NavDropdown.Item>
                <NavDropdown.Item className="nav-font" href="/party_decorations/cake_toppers">Cake Toppers</NavDropdown.Item>
                <NavDropdown.Item className="nav-font" href="/party_decorations/goodie_bags">Goodie Bags</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item className="nav-font" href="/party_decorations/">See all</NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link className="nav-font" href="/valentines_day">Valentine's Day</Nav.Link> */}
              <Nav.Link className="nav-font" href="/vinyl">Vinyl</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>


          <br></br>
      <Container className="footer" >
        <Navbar className="footer" fixed="bottom"  bg="light" expand="lg">
                <Navbar.Brand className="footer"></Navbar.Brand>
                <a href="https://www.instagram.com/cindylus_creations/" target="_blank"><img className="footer-image" src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/instagram_logo.png"></img></a>
        </Navbar>
      </Container>

      <Router>
        <Switch>
          {/* <Route exact exact path = '/' render = {renderLandingPage} /> */}
          <Route exact path='/' component={Landing_Page}/> 
          <Route exact path='/about_me' component={About_me}/> 
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/custom' component={Custom}/>
          <Route exact path='/cups' component={Cups}/>
          <Route exact path='/cups/animals' component={Animals}/>
          <Route exact path="/cups/anime" component={Anime}/>
          <Route exact path='/cups/disney' component={Disney}/>
          <Route exact path='/cups/movies' component={Movies}/>
          <Route exact path='/cups/music' component={Music}/>
          <Route exact path='/cups/nature' component={Nature}/>
          <Route exact path='/cups/sports' component={Sports}/>
          <Route exact path='/cups/tv' component={TV}/>
          {/* <Route exact path='/cups/valentines_day' component={Cups}/> */}

          <Route exact path='/heat_press' component={Heat_Press}/>
          <Route exact path='/heat_press/hats' component={Hats}/>
          <Route exact path='/heat_press/make_up_bags' component={Make_Up_Bags}/>
          <Route exact path='/heat_press/pencil_bags' component={Pencil_Bags}/>
          <Route exact path='/heat_press/shirts' component={Shirts}/>

          <Route exact path='/laser' component={Laser}/>
          <Route exact path='/flowers' component={Flowers}/>
          <Route exact path='/party_decorations/banners' component={Banners}/>
          <Route exact path='/party_decorations/cake_toppers' component={Cake_Toppers}/>
          <Route exact path='/party_decorations/center_pieces' component={Center_Pieces}/>
          <Route exact path='/party_decorations/goodie_bags' component={Goodie_Bags}/>
          <Route exact path='/party_decorations' component={Party_Decorations}/>
          <Route exact path='/valentines_day'/>
          <Route exact path='/vinyl' component={Vinyl}/>
        </Switch>
      </Router>

        {/* <h1>12:00</h1> */}
    </div>

  );
}

export default App;

/*<InstagramEmbed
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
  onFailure={() => {}}/>*/









