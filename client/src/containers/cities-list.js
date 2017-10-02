import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Homestyle from '../css/Homestyle.css';




class CityList extends Component {

	loadCities() { 
		return this.props.cities.map((city) => {
			return(
						<li key={city.id}>
							<img src={city.card_image} />
							<h1>{city.city_name}</h1>
						</li>
			);
	});
}


	render() {
		return ( 
			<ul className="card">
				{this.loadCities()}
			</ul>
		);
	}
}


function mapStateToProps(state){
	return{
		cities: state.cities
	}
}

export default connect(mapStateToProps)(CityList);