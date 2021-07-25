import React from 'react';
import { FlatList } from 'react-native';
import { 
    useSelector, 
    connect 
} from 'react-redux';
import ForecastItem from '../../common/forecasts/ForecastItem';
import HeaderList from './HeaderList';

const ForecastsList = () => {
    const weatherForecasts = useSelector(state => state.weatherReducer.weatherForecasts);

    const renderForecast = ({ item, index }) => (
        <ForecastItem 
            item={item} 
            index={index} 
        />
    )

    return (
        <FlatList 
            ListHeaderComponent={() => (
                <HeaderList 
                    value={weatherForecasts.length > 0 ? weatherForecasts[0].EpochDateTime : 0} 
                />
            )}
            data={weatherForecasts}
            renderItem={renderForecast}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

function mapStateToProps() {
    return {};
}
  
export default connect(mapStateToProps, {})(ForecastsList);