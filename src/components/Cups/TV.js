import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'


function TV() {
  return (
    <div>
        {/* anchor these */}
        <h1>TV</h1>
        <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/grogu1.jpg"
            alt="First slide"
          /><br></br>
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default TV