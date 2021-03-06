import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Center_Pieces() {
  return (
    <div>
        <h1>Center Pieces</h1>
        <h2>Micky Mouse</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/mickey1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    

        <h2>Moana</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/moana3.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    
    </div>
  )
}

export default Center_Pieces