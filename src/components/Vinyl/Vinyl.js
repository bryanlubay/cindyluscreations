import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Vinyl() {
  return (
    <div>
      
        <h1>Vinyl</h1>
        <h2>Frames</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/vinyl/frame1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Portraits</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/vinyl/skull1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/vinyl/vinyl1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    

    </div>
  )
}

export default Vinyl