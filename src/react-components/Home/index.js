import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

/* Component for the Home page */
class Home extends React.Component {
  render() {
    return (
    <div>
      <div className="bg-image center">
        <div className="hero-text">
          <br/>
          <Button className="__button" href="/About-Me">About Me</Button>
          <Button className="__button" href="/Projects">Projects</Button>
          <Button className="__button" href="/Contact-Me">Contact Me</Button>
          <Button className="__button" href="/Travel-Gallery">Travel Gallery</Button>
          <br/>
		</div>
		<div className="hero-text">
		  <h1 className="title">Hi! I'm Radhika Lakhtakia</h1>
		  <p className="subtitle">And I'm a Software Developer!</p>
		</div>
      </div>
    </div>
    );
  }
}

export default Home;
