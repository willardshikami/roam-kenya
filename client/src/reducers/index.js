import {combineReducers} from 'redux';
import CityReducer from './reducer-cities';

 const allReducers = combineReducers({
     cities : CityReducer
 });

 export default allReducers;