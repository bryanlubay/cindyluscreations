import React, {useState, useEffect, Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com';

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
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact