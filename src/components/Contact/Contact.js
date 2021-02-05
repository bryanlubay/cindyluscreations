import React, {useState, useEffect, Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
  return (
    <div>
      
        <h1>Contact</h1>
        <p>Instagram: <a href="https://www.instagram.com/cindylus_creations/" target="_blank">instagram.com/cindylus_creations</a></p>

        <Form className="form">
        <Form.Group>
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="textarea"/>
          </Form.Group>

          <Form.Group>
            <Form.Label><b>Email address</b></Form.Label>
            <Form.Control type="email"/>
          </Form.Group>


          <Form.Group>
            <Form.Label><b>Example textarea</b></Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          
          <Button type="submit">Submit</Button>
    
        </Form>
    </div>
  )
}

export default Contact