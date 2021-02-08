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
          <InputGroup.Prepend className="radio">
            <InputGroup.Checkbox className="radio"></InputGroup.Checkbox>
            <InputGroup.Text className="radio">Text1</InputGroup.Text>


            <InputGroup.Text className="radio"><InputGroup.Checkbox className="radio"></InputGroup.Checkbox>Text4</InputGroup.Text>
          </InputGroup.Prepend>
          {/* <FormControl aria-label="Text input with checkbox" /> */}
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend className="radio">
            <InputGroup.Radio className="radio"></InputGroup.Radio>
            <InputGroup.Text className="radio">Text2</InputGroup.Text>
            {/* <InputGroup.Radio className="radio"><InputGroup.Checkbox className="radio"></InputGroup.Checkbox>Text4</InputGroup.Radio> */}
          </InputGroup.Prepend>
          {/* <FormControl aria-label="Text input with radio button" /> */}
        </InputGroup>

    </div>
  )
}

export default about_me