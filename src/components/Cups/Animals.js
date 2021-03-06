import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function Animals() {
  return (
    <div>
        {/* anchor these */}
        <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="/cups">Cups</Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item" active>Animals</Breadcrumb.Item>
          </Breadcrumb>
        {/* <h1>Animals</h1> */}
        <h2>Dogs</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/dogs1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/dogs2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Penguins</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/penguins1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/penguins2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Unicorns</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/unicorn1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>
    </div>
  )
}

export default Animals