import React, {useState, useEffect, Component} from 'react';
import InputGroup from 'react-bootstrap/InputGroup'

function about_me() {
  return (
    <div>
        <h1>About me</h1>
        <p>I like to make cups, backpacks and a lot of other things!</p>
        <img className="category-image" src="https://cindyluscreations.s3-us-west-1.amazonaws.com/images/logo.jpg"></img>
        <br></br>
        <br></br>
        <p></p>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            {/* <InputGroup.Checkbox aria-label="Checkbox for following text input"/> */}
            <InputGroup.Checkbox>Helllooo</InputGroup.Checkbox>
          </InputGroup.Prepend>
          {/* <FormControl aria-label="Text input with checkbox" /> */}
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <InputGroup.Radio>Raddioooo</InputGroup.Radio>
          </InputGroup.Prepend>
          {/* <FormControl aria-label="Text input with radio button" /> */}
        </InputGroup>

    </div>
  )
}

export default about_me