import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../actions';
import FlatButton from 'material-ui/FlatButton';
import { Table } from 'reactstrap';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


class AllUsers extends Component{
	constructor(props){
		super();
		props.userActions.getUsers();

		this.state = { 
			filterBy: '', 
			userTabSlideIndex: 0,
		};
	}
  //Search html tables using javascript
  handleSearch(event) {
    
    var input, filter, table, tr, td, i;

    input  = event.target.value;

    this.setState({filterBy: input});

    filter = input.toUpperCase();
    table = document.getElementById("userTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].innerHTML;
      if (td) {
        if (td.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

	render(){
		const { usersList } = this.props;

		return(
			<div></div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(UserActions, dispatch),
	};
}

function mapStateToProps(state, ownProps) {
	return {
		usersList: state.users.list,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
