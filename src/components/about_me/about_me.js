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

        <InputGroup className="radio">
          <InputGroup.Prepend className="radio">
            {/* <InputGroup.Checkbox></InputGroup.Checkbox> */}
            <InputGroup.Radio></InputGroup.Radio>
            <InputGroup.Text>Backpack</InputGroup.Text>
          </InputGroup.Prepend>

          <InputGroup.Prepend className="radio">
            {/* <InputGroup.Checkbox></InputGroup.Checkbox> */}
            <InputGroup.Radio></InputGroup.Radio>
            <InputGroup.Text>Cup</InputGroup.Text>
          </InputGroup.Prepend>

          <InputGroup.Prepend className="radio">
            {/* <InputGroup.Checkbox></InputGroup.Checkbox> */}
            <InputGroup.Radio></InputGroup.Radio>
            <InputGroup.Text>Hats</InputGroup.Text>
          </InputGroup.Prepend>

        </InputGroup>


    </div>
  )
}

export default about_me