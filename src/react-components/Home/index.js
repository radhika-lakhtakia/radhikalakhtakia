import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { LinkContainer} from "react-router-bootstrap";

import "./styles.css";

/* Component for the Home page */
class Home extends React.Component {
  render() {
    return (
    <div>
      <div className="bg-image center">
        <div className="hero-text">
          <br/>
          <LinkContainer to='/About-Me' className='__button'>
            <Button className="__button">About Me</Button>
          </LinkContainer>
          <LinkContainer to='/Projects' className='__button'>
            <Button className="__button">Projects</Button>
          </LinkContainer>
          <LinkContainer to='/Contact-Me' className='__button'>
            <Button className="__button">Contact Me</Button>
          </LinkContainer>
          <LinkContainer to='/Travel-Gallery' className='__button'>
            <Button className="__button">Travel Gallery</Button>
          </LinkContainer>
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