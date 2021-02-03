import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import "./about-styles.css";
import myPDF from "./static/important/Radhika_Lakhtakia_Resume.pdf";
import image from "./static/download-icon-png-4399.png";

/* Component for the Home page */
class About extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="background">
          <div className="img-placement">
          </div>
          <div className="section">
            <h1 className="section-title">About Me</h1>
            
            <p className="about-me">
            My Name is Radhika Lakhtakia - if you couldn't tell from the homepage or the website url! I attend the University of Toronto Mississauga campus for Computer Science and Mathematics. I would go more in-depth about that, but it's a bit much so if you do want to learn more, you can download my resume below!
            <br/><br/>Apart from my dev work and school, I am very interested in reading, keeping up with current affairs, and travelling. You can check out my travel gallery to see all the cool places I've visited!
            </p>
            <br/>
            <br/>
            <a href={myPDF} target="_blank" className="btn"> 
              Download Resume 
              <img src={image} className="icon"/>
            </a>
          </div>
        </div>
    </div>
    );
  }
}

export default About;
