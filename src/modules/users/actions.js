
import usersApi from '../.././api/usersApi';
import * as action from './actionCreators';

export function getUsers() {
	return function(dispatch) {

		return usersApi.getUsers().then(response => {

			dispatch(action.getUsersSuccess(response.data));

		}).catch(error => {

			dispatch(action.dispatchGeneralError(error));
		});
	};
}

export function getUser() {
	return function(dispatch) {

		return usersApi.getUser().then(response => {

			dispatch(action.getUserSuccess(response.data));

		}).catch(error => {

			dispatch(action.dispatchGeneralError(error));
		});
	};
}

export function updateUser() {
	return function(dispatch) {

		return usersApi.updateUser().then(response => {

			dispatch(action.updateUserSuccess(response.data));

		}).catch(error => {

			dispatch(action.dispatchGeneralError(error));
		});
	};
}

