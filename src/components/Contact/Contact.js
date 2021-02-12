import React, {useState, useEffect, Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs, { init } from 'emailjs-com';
import Overlay from 'react-bootstrap/Overlay'
import { OverlayTrigger } from 'react-bootstrap';
import { Popover } from 'bootstrap';
init("user_MtgUQNqrhATMY50aphkcR");

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('cindyluscreations', 'cindyluscreations', e.target, 'user_MtgUQNqrhATMY50aphkcR')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

function Contact() {
  return (
    <div>
      
        <h1>Contact</h1>
        <p>Instagram: <a href="https://www.instagram.com/cindylus_creations/" target="_blank">instagram.com/cindylus_creations</a></p>

        {/* <Form className="form">
        <Form.Group>
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="textarea"/>
          </Form.Group>

          <Form.Group>
            <Form.Label><b>Email address</b></Form.Label>
            <Form.Control type="email"/>
          </Form.Group>


          <Form.Group>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          
          <Button type="submit">Submit</Button>
    
        </Form> */}

        <form className="contact-form" onSubmit={sendEmail}>
        {/* <form className="contact-form"> */}
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <br></br>
          <input type="text" name="user_name" />
          <br></br>
          <label>Email</label>
          <br></br>
          <input type="email" name="user_email" />
          <br></br>
          <label>Message</label>
          <br></br>
          <textarea name="message" />
          <br></br>
            <OverlayTrigger trigger='click' placement='right'
              overlay={
                <Popover>
                  <Popover.Title as="h3">Contact form submitted!</Popover.Title>
                  <Popover.Content>
                  Thank you for your order! I will reply back to you soon!

                  </Popover.Content>
                </Popover>}>
                <input type="submit" value="Send"></input>
            </OverlayTrigger>

          


        </form>





    </div>
  )
}

export default Contact