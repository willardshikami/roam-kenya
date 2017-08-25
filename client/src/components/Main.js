import React, { Component } from 'react';
import App from '../css/App.css';
import CityList from '../containers/cities-list';
import Home from '../components/Home.js';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Home/>
      </div>
    );
  }
}

export default Main;
