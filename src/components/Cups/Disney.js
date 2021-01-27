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
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/ariel1.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/ariel3.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/ariel5.jpg"
            alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/ariel6.jpg"
            alt="First slide"/>
        </Carousel.Item>
        </Carousel>

        <h2>Baby Groot</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/baby_groot1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>

        <h2>Beast</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/beast1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Disney