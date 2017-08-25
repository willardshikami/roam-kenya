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
						<Col sm={6} md={3}/><p>This List</p>
						</Row>
					</Grid>
				</div>
			);
		});
	}
	render() {
		return ( 
			<div className="citylist">
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