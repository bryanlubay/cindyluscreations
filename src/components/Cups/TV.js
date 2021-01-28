import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function TV() {
  return (
    <div>
        {/* anchor these */}
        <h1>TV</h1>
        <h2>Game of Thrones</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/game_of_thrones1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>SpongeBob SquarePants</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/spongebob1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/spongebob2.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/spongebob3.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Stranger Things</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/stranger_things1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>
    </div>
  )
}

export default TV