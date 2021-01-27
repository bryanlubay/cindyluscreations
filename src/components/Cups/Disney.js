import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function Disney() {
  return (
    <div>
        {/* anchor these */}
        <h1>Disney</h1>
        <h2>Ariel</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/areil1.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/areil3.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/areil5.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/areil6.jpg"
            alt="First slide"/>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Disney