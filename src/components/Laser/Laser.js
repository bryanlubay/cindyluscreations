import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Laser() {
  return (
    <div>
        <h1>Laser</h1>
        <h2>Backpacks</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/laser/backpack1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>
      
    </div>
  )
}

export default Laser