import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	//console.log('Action recieved', action);
	switch (action.type) {
		case FETCH_WEATHER:
			//return state.concat([action.payload.data]);   //concat does not mutate the old but creates a new array 
														//the new values concatenated. 
			return [ action.payload.data, ...state ]; // this is the es6 way of doing the above, except the new record is 
													  // inserted at the top..														
	}												  // [city, city, city] NOT [city, [city, city]]
	return state;
}