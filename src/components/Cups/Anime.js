import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Anime() {
  return (
    <div>
        {/* anchor these */}
        <h1>Anime</h1>
        <h2>Naruto</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/naruto1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/naruto2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Anime