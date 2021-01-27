import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Movies() {
  return (
    <div>
        {/* anchor these */}
        <h1>Movies</h1>
        <h2>Transformers</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bumblebee1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>    </div>
  )
}

export default Movies