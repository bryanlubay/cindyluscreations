import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Banners() {
  return (
    <div>
        <h1>Banners</h1>
        <h2>Betty Boop</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/bettyboop2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>    

        <h2>Micky Mouse</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/micky2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel>    
    </div>
  )
}

export default Banners