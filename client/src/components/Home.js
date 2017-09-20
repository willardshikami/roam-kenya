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
            <div className="container hero_content">
              <p className="second">Find Essential Information for your next Journey</p>
              <h1>Karibu Kenya</h1>
              <p className="first">The Pride of Africa</p>
            </div>
        </div>
        <div className="container">
        <div className="history">
          <div className="history_title">
            <h1>About Kenya</h1>
            <hr/>
          </div>
          <div className="history_narrative">
          <p>Kenya, officially the Republic of Kenya, is a country in Africa and a founding member of the East African Community. Its capital and largest city is Nairobi. Kenya's territory lies on the equator and overlies the East African Rift covering a diverse and expansive terrain that extends roughly from Lake Victoria to Lake Turkana and further south-east to the Indian Ocean.</p>
        </div>
        </div>
        <div className="the_cities">
          <div className="the_cities_title">
            <h1>Popular places</h1>
            <hr/>
          </div>
          <CityList/>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
