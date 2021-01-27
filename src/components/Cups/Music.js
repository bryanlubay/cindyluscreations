import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Music() {
  return (
    <div>
        {/* anchor these */}
        <h1>Music</h1>
        <h2>Bad Bunny</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bad_bunny1.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bad_bunny2.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bad_bunny3.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bad_bunny4.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bad_bunny5.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bad_bunny6.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/bad_bunny7.jpg"
            alt="First slide"/>
        </Carousel.Item>

        </Carousel>
        
        <h2>Billie Ellish</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/billie_ellish1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        </Carousel>
        
        <h2>Ice Cube</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/icecube1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        </Carousel>
        
        <h2>Selena</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/selena1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/selena2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        </Carousel>

    </div>
  )
}

export default Music