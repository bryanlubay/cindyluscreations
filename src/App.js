import InstagramEmbed from 'react-instagram-embed';
import React from 'react';
import './App.css';

function App() {
  return (
        <div className="background">
        <h1>Welcome to Cindylus Creations!</h1>
        <p className="menu"><b className="menu-item">Custom</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b className="menu-item">Disney</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b className="menu-item">Movies</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b className="menu-item">Music</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b className="menu-item">New Years 2021</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b className="menu-item">Sports</b></p>

        <InstagramEmbed
  url='https://www.instagr.am/p/CA3aDJ7HlTE/'
  clientAccessToken='413905563134913|1e7b57740da098e528aa20e8ea739d21'
  maxWidth={320}
  hideCaption={false}
/>
        
     </div>
     
  );
}

export default App;
