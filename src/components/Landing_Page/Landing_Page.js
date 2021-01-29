import React, {useState, useEffect, Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Landing_Page() {
  return (
    <div>
      <p>Hello</p>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/grogu1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/laser/backpack1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/heat_press/hats1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/flowers/flowers9.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/vinyl/vinyl1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/mylittlepony1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      {/* component = add to bottom, render =  */}

    </div>
  )
}

export default Landing_Page

// const Landing_Page = () => {
  //   return (
  //     <div>
  //       <h1>Landing Page</h1>
  //       <Carousel>
  //         <Carousel.Item>
  //           <img
  //             className="carousel-image"
  //             src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/cups/grogu1.jpg"
  //             alt="First slide"
  //           />
  //           <Carousel.Caption>
  //             {/* <h3>First slide label</h3> */}
  //             {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="carousel-image"
  //             src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/laser/backpack1.jpg"
  //             alt="First slide"
  //           />
  //           <Carousel.Caption>
  //             {/* <h3>First slide label</h3> */}
  //             {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="carousel-image"
  //             src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/heat_press/hats1.jpg"
  //             alt="Second slide"
  //           />
  
  //           <Carousel.Caption>
  //             {/* <h3>Second slide label</h3> */}
  //             {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="carousel-image"
  //             src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/flowers/flowers1.jpg"
  //             alt="Third slide"
  //           />
  
  //           <Carousel.Caption>
  //             {/* <h3>Third slide label</h3>
  //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="carousel-image"
  //             src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/vinyl/vinyl1.jpg"
  //             alt="Third slide"
  //           />
  
  //           <Carousel.Caption>
  //             {/* <h3>Third slide label</h3>
  //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="carousel-image"
  //             src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/party_decorations/mylittlepony1.jpg"
  //             alt="Third slide"
  //           />
  
  //           <Carousel.Caption>
  //             {/* <h3>Third slide label</h3>
  //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
  //           </Carousel.Caption>
  //         </Carousel.Item>
  
  //       </Carousel>
  
  //       {/* component = add to bottom, render =  */}
  
  //       <h1>Home 1:53</h1>
  
  //     </div>
  //   )
  // }
  
  // export default Landing_Page;