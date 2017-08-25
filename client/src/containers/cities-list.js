import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';




class CityList extends Component {
	loadCities(){
		return this.props.cities.map((city) =>{
			return(
				<div>

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