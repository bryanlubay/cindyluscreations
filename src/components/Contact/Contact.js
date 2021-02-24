import React, {useState, useEffect, Component} from 'react';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import emailjs, { init } from 'emailjs-com';
// import Overlay from 'react-bootstrap/Overlay'
// import { OverlayTrigger } from 'react-bootstrap';
// import { Popover } from 'bootstrap';
// import Toast from 'react-bootstrap/Toast'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormCheck } from 'react-bootstrap';

init("user_MtgUQNqrhATMY50aphkcR");

function sendEmail(e) {
  e.preventDefault();

  e.target.text += "HMMMMMMMM"

  // document.getElementById("hmm").textContent = e.target.value()

  emailjs.sendForm('cindyluscreations', 'cindyluscreations', e.target, 'user_MtgUQNqrhATMY50aphkcR')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    document.getElementById("contact-submit").hidden = true;
    document.getElementById("contact-message").hidden = false;
}

function Contact() {
  return (
    <div>
      
        <h1>Contact</h1>        
        <p>Instagram: <a href="https://www.instagram.com/cindylus_creations/" target="_blank">instagram.com/cindylus_creations</a></p>


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
            <textarea name="message2" />

            <br></br>            

          

            <input type="radio" id="backpack" name="main" ></input>
            <label for="backpack">Backpack</label>
            <input type="radio" id="cups" name="main" ></input>
            <label for="cups">Cups</label>

            <br></br>            


            <input id="contact-submit" type="submit" value="Send"></input>


            <p id="contact-message" hidden="true">Your message has been sent!</p>

          

            </form>

          <h1 id="hmm">Hmm2</h1>

          <Form inline onSubmit={sendEmail}>
            <Form.Label >
              Preference
            </Form.Label>
            <Form.Control
              as="select"
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
            <Button type="submit">
              Submit
            </Button>
          </Form>


    </div>
  )
}

export default Contact