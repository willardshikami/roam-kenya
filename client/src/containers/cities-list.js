import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CityList extends Component {
	render() {
		return ( 
			<ul>

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