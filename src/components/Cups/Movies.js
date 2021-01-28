import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Movies() {
  return (
    <div>
        <h1>Movies</h1>
        {/* <h2>Friday the 13th</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/jason1.mp4"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br>     */}

        <h2>Halloween</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/michael_meyers1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    

        <h2>Transformers</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bumblebee1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    
    
    </div>
  )
}

export default Movies