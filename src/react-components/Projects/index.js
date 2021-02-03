import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Header from "../Header";
import "./styles.css";

/* Component for the Home page */
class Projects extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="background">
          <h1 className="section-title">Projects</h1>
        </div>
    </div>
    );
  }
}

export default Projects;
