import React, {useState, useEffect, Component} from 'react';

function Custom() {
  return (
    <div>
      
        <h1>Custom</h1>
        <p>Hello</p>
        <h2>Animals</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/custom25.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/custom18.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/custom19.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/custom28.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/custom3.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/custom5.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/custom9.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br>
    </div>
  )
}

export default Custom