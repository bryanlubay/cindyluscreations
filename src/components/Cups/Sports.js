import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Sports() {
  return (
    <div>
        {/* anchor these */}
        <h1>Sports</h1>
        <h2>Las Vegas Golden Knights</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/golden_knights1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/golden_knights2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>
        
        <h2>Las Vegas Raiders</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/raiders1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>

        <h2>Los Angeles Dodgers</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/dodgers1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/dodgers2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>  
      </div>
  )
}

export default Sports