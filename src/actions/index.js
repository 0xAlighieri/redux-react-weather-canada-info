import axios from 'axios';

//OpenWeatherMap API
const API_KEY = "afe9af99482f3fd1242cd0b5e22cb246";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`;
    const request = axios.get(url);

    // console.log("Request:", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}


