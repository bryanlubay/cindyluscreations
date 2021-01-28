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
        </Carousel><br></br>

        <h2>Baby Groot</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/baby_groot1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Beast</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/beast1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Castle</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/disney1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/disney2.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/disney3.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/disney4.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/disney5.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/disney6.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>


        <h2>Daisy</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/daisy_duck1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Dumbo</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/dumbo1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Grogu</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/grogu1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Hades</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/hades1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Mandalorian</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/mandalorian1.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Micky</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/micky1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/micky2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Minnie</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/minnie1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/minnie2.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/minnie3.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/minnie4.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Winnie the Pooh</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/pooh2.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/pooh3.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>

        <h2>Stitch</h2>
        <Carousel>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/stitch1.jpg"
            alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/stitch2.jpg"
            alt="First slide"/>
          </Carousel.Item>
        </Carousel><br></br>



    </div>
  )
}

export default Disney