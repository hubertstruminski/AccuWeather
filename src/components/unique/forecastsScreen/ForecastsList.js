import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, connect } from 'react-redux';
import ForecastItem from '../../common/forecasts/ForecastItem';

const ForecastsList = () => {
    const weatherForecasts = useSelector(state => state.weatherReducer.weatherForecasts);

    const renderForecast = (item) => (
        <ForecastItem item={item} />
    )

    return (
        <FlatList 
            data={weatherForecasts}
            renderItem={renderForecast}
        />
    );
};

function mapStateToProps() {
    return {};
}
  
export default connect(mapStateToProps, {})(ForecastsList);