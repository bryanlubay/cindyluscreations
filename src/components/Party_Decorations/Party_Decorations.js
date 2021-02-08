import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Party_Decorations() {
  return (
    <div>
        <h1>Party Decorations</h1>
        <h2>Banners</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/micky2.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/bettyboop2.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br> 

        <h2>Center Pieces</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/mickey1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/moana3.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br> 

        <h2>Cake Toppers</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/birthday1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/birthday2.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/micky3.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br> 

        <h2>Goodie Bags</h2>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/disney1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/moana2.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/mylittlepony1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/bettyboop1.jpg"
            alt="First slide"
          /><br></br>
        </Carousel.Item>
        </Carousel><br></br> 
    </div>
  )
}

export default Party_Decorations