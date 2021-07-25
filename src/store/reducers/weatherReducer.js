import { 
    FETCH_FORECAST_12_HOURS, 
    FETCH_LOCATION_KEY 
} from "../actions/weatherActions";

const initialState = {
    locationKey: '',
    weatherForecasts: [],
};
  
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATION_KEY:
            state.locationKey = action.payload;
            return state;
        case FETCH_FORECAST_12_HOURS:
            state.weatherForecasts = action.payload;
            return state;
        default:
            return state;
    }
};
  
  export default weatherReducer;