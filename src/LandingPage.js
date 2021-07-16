import React, { Component } from 'react';
import photo from '../src/IMG/mern.jpg'
class LandingPage extends Component {

  render(){
    return <div className="Landingpage">
      <h1 className="welcome-header">Welcome to Your Meet App!</h1>
      <h2>Enter Your name</h2>
      <input className="username-input" type="text" placeholder="Your Name Here"/>
      <br></br>
      <button className="landing-button" type="submit" onClick={this.props.setUsername}>Get Started!</button>
      <br></br>
      <img src={photo} alt="landing-page"/>
    </div>
  }
} 

export default LandingPage;