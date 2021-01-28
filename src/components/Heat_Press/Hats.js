import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Hats() {
  return (
    <div>
        <h1>Hats</h1>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/heat_press/hats1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>    
    </div>
  )
}

export default Hats