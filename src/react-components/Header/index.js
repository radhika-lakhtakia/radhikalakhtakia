import React from "react";
import "./styles.css";
import { LinkContainer} from "react-router-bootstrap";

/* The Header Component */
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <LinkContainer to='/About-Me' className='button'>
          <a >ABOUT ME</a>
        </LinkContainer>
        <LinkContainer to='/Projects' className='button'>
          <a >PROJECTS</a>
        </LinkContainer>
        <LinkContainer to='/Contact-Me' className='button'>
          <a >CONTACT ME</a>
        </LinkContainer>
        <LinkContainer to='/Travel-Gallery' className='button'>
          <a >TRAVEL GALLERY</a>
        </LinkContainer>
      </div>
    );
  }
}

export default Header;
