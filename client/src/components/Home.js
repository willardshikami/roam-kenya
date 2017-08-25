import React, { Component } from 'react';
import Homestyle from '../css/Homestyle.css';
import hero from '../img/kenya_hero.jpg';
import CityList from '../containers/cities-list';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="hero">
            <img src={hero} alt={"Hero"}/>
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
