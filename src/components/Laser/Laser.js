import React, {useState, useEffect, Component} from 'react';

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
        </Carousel>    
      
    </div>
  )
}

export default Laser