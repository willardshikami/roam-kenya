import {combineReducers} from 'redux';
import CityReducer from './reducer-cities';
import HotelReducer from './reducer-hotels';
import ActivityReducer from './reducer-activities';
import AttractionReducer from './reducer-attractions';
import EateryReducer from './reducer-eatery';
import SurvivalReducer from './reducer-survival';

 const allReducers = combineReducers({
    activities: ActivityReducer, 
    attractions: AttractionReducer,
    cities: CityReducer,
    eateries: EateryReducer,
    hotels: HotelReducer,
    survivals: SurvivalReducer 
 });

 export default allReducers;