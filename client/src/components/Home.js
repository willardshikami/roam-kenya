import React, { Component } from 'react';
import Homestyle from '../css/Homestyle.css';
import heroImage from '../img/hero_full.jpg';
import CityList from '../containers/cities-list';


const heroStyle = {
  backgroundImage: "url(" + heroImage + ")",
  height: "580px",
}

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="hero" style={heroStyle}>
            <div className="hero_content">
              <h1>KARIBU KENYA</h1>
              <p>The Pride of Africa</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
