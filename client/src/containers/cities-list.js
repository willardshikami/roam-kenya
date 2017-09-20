import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap'




class CityList extends Component {
	loadCities(){
		return this.props.cities.map((city) =>{
			return(
				<div className="theCities">
					<Grid>
						<Row>
						<Col sm={6} md={3}/>
						<div key={city.id} className="card">
							<img src={city.card_image}/>
							<div className="city_content">
								<h1>{city.city_name}</h1>
								<p>{}</p>
							</div>
						</div>
						</Row>
					</Grid>
				</div>
			);
		});
	}
	render() {
		return ( 
			<div className="cityList">
				{this.loadCities()} 
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