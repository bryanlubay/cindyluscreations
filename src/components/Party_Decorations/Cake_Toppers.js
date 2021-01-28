import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Cake_Toppers() {
  return (
    <div>
        <h1>Cake Toppers</h1>
        <h2>Birthdays</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/birthday1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/birthday2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Micky Mouse</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/micky3.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    
    </div>
  )
}

export default Cake_Toppers