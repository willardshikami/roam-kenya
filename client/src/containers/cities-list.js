import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import Homestyle from '../css/Homestyle.css';




class CityList extends Component {
	render() {
		return ( 
			<div className="city-list">
				{this.props.cities.map((city) => (
					<Grid>
					<Row className="show-grid">
					<Col  xs={6} md={4}>
					<div key={city.id} className="card">
						<img src={city.card_image}/>
						<div className="city_content">
							<h1>{city.city_name}</h1>
							<p>{}</p>
						</div>
					</div>
					</Col>
					</Row>
				</Grid>
				))} 
			</div>
		);
	}
}


function mapStateToProps(state){
	return{
		cities: state.cities
	}
}

export default connect(mapStateToProps)(CityList);