import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Grid, Icon, Button, Card, Image } from 'semantic-ui-react'
import Homestyle from '../css/Homestyle.css';




class CityList extends Component {



	loadCities() { 
		return this.props.cities.map((city) => {
			return(
					<li className="child">
					

						<Card key={city.id}
    					image={city.card_image}
   		 				header={city.city_name}
    					meta= {city.county}
    					description={city.shortdesc}
						/>
						
					</li>
			);
	});
}


	render() {
		return ( 

			<ul className="parent">
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