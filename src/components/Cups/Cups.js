import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Cups() {
  return (
    <div>
        {/* anchor these */}
        <h1>Cups</h1>
        <h2>Animals</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/dogs1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/penguins1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/unicorn1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br>
        <h2>Anime</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/naruto1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/naruto2.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br>
        <h2>Disney</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/grogu1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/baby_groot1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/stitch1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br>
        <h2>Movies</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/michael_meyers1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bumblebee1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br>
        <h2>Music</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bad_bunny1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/billie_ellish1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/icecube1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/selena2.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br>
        <h2>Sports</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/golden_knights1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/raiders1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/dodgers1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br>
        <h2>TV</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/game_of_thrones1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/spongebob2.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/stranger_things1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br>
       
    </div>
  )
}

export default Cups