import React, {Component, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ImageList from '@material-ui/core/ImageList';
import { ImageListItem } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Header from "../Header";
import "./styles.css";
import img from "./static/20190128_182550.jpg"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const data_images = importAll(require.context('./Trav', false, /\.(png|jpe?g|svg)$/))

const Expire = props => {
  
  const setVisible = () => {
    console.log("lets see ya")
    let d = document.getElementById("invis");
    d.style.display = "block"
    let load = document.getElementById("loading");
    load.style.display = "none"
  }

  useEffect(() => {
    setTimeout(() => {
      setVisible();
    }, props.delay);
  }, [props.delay]);

  return (
    <>
      <div id="loading">
        <br/>
        <br/>
        <LinearProgress />
      </div>
      <div id="invis" style={{"display":"none"}}>
        {props.children}
      </div>
    </>
  );
};

/* Component for the Home page */
class Travel extends Component {

  render() {

    return (
      <div>
        <Header/>
        <div className="background">
        	<h1 className="section-title">Travel Gallery</h1>
        </div>
        <div>
          <hr/>
          <blockquote className="quote">
            "There's only one difference between art and science. In science, the universe is in control.<br/><span className="effect">In art, you are."</span><br/><span className="author">- Harold Kroto, Nobel Prize in Chemistry</span>
          </blockquote>
          <hr/>
        </div>
        <br/>
        <Expire delay="20000">
            <ImageList variant="masonry" cols={3} gap={8}>
              {Object.entries(data_images).map( ([item, src]) => (
                <ImageListItem key={item}>
                  <img
                    srcSet={`${src}?w=161&fit=crop&auto=format 1x,
                      ${src}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item}
                  />
                </ImageListItem>
              ))}
            </ImageList>
        </Expire>     
      </div>
    );
  }
}

export default Travel;
