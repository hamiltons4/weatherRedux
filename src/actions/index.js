import axios from 'axios';

const API_KEY = 'acd16921ba168667d7058f8c204685d7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	//console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request //we are returning the promise as the payload. This is not the actual data. It's just the promise. 
	};					//redux-promise handles this for us.
}