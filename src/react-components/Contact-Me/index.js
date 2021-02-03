import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import emailjs from 'emailjs-com';

import "./styles.css";

/* Component for the Home page */
class Contact extends React.Component {

  constructor() {
      super();
      this.state = {
          'from_name': 'Your Name..',
          'from_email': 'Your Email..',
          'message': 'Your Message..'
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleNameChange = (e) => {
      this.setState({from_name: e.target.value});
  }

  handleEmailChange = (e) => {
      this.setState({from_email: e.target.value});
  }

  handleMessageChange = (e) => {
      this.setState({message: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault()
    var serviceID = 'service_arxkiw6';
    var templateID = 'template_sulswpp';
    var userID = 'user_Jw7lv2INpX7aDgJhtDhL8';
    emailjs.send(serviceID, templateID, this.state, userID)
      .then((response) => {
       alert("Email Sent! Radhika will try to respond in 1-3 days.");
       this.resetForm()
    }, (err) => {
       alert("Unable to send email at this time. Please try again later")
    });
  }

  resetForm() {
    this.setState({
      'from_name': 'Your Name..',
      'from_email': 'Your Email..',
      'message': 'Your Message..'
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="background">
            <div className="section3">
              <a target="_blank" title="Redirect to Facebook" href="https://www.facebook.com/radhika.lakhtakia/" className="fa fa-facebook"></a>
              <br/>
              <a target="_blank" title="Redirect to Instagram" href="https://www.instagram.com/radhika.l/" className="fa fa-linkedin"></a>
              <br/>
              <a target="_blank" title="Redirect to Linkedin" href="https://www.linkedin.com/in/radhika-lakhtakia/" className="fa fa-instagram"></a>
              <br/>
              <a target="_blank" title="Redirect to Github"  href="https://github.com/radhika-lakhtakia" className="fa fa-github"></a>
            </div>
            <a href="mailto:radhika_lakhtakia@hotmail.ca">
              <div title="Send an Email Directly" className="section1">
              </div>
            </a>
            <div className="section2">
              <h1 className="section-title">Contact Me</h1>
              <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input onChange={this.handleNameChange} type="text" id="name" value={this.state.from_name} required />

                <label>Email:</label>
                <input onChange={this.handleEmailChange} type="email" id="email" value={this.state.from_email} required/>

                <label>Message:</label>
                <textarea onChange={this.handleMessageChange} id="message" value={this.state.message} required/>
              
                <input type="submit" value="Send"/>
              </form>
            </div>
        </div>
    </div>
    );
  }
}

export default Contact;
