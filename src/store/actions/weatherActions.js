import axios from 'axios';
import { API_KEY, ENDPOINT_URL } from "../../constants/contstants";

export const FETCH_LOCATION_KEY = 'FETCH_LOCATION_KEY';
export const FETCH_FORECAST_12_HOURS = 'FETCH_FORECAST_12_HOURS';

export const fetchLocationKey = (city) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${ENDPOINT_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}&language=en`,
        headers: {
          'Accept': '*/*',
        },
        data: undefined
      });

      dispatch({
        type: FETCH_LOCATION_KEY,
        payload: response.data[0].Key,
      });
    } catch(e) {
      console.log(e);
    }
  };
};

export const fetchForecast12Hours = (locationKey) => {
  console.log("before dispatch");
  return async (dispatch) => {
    try {
      console.log("before axios");
      const response = await axios({
        method: 'GET',
        url: `${ENDPOINT_URL}/forecasts/v1/hourly/12hour/${locationKey}?apikey=${API_KEY}`,
        headers: {
          'Accept': '*/*',
        },
        data: undefined
      });

      console.log(response);

      dispatch({
        type: FETCH_FORECAST_12_HOURS,
        payload: response.data,
      });
    } catch(e) {
      console.log(e);
    }
  };
};