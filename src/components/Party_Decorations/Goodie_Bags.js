import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Goodie_Bags() {
  return (
    <div>
        <h1>Goodie Bags</h1>
        <h2>Betty Boop</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/bettyboop1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Disney</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/disney1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    

        <h2>Moana</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/moana2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    

        <h2>My Little Pony</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/mylittlepony1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>    
    </div>
  )
}

export default Goodie_Bags