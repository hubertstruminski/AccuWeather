import React, { useEffect } from 'react';
import { 
    SafeAreaView, 
    StatusBar 
} from 'react-native';
import { globalStyles } from '../../common/globalStyle';
import styles from './forecastsScreenStyle';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';
import BackButton from '../../common/button/BackButton';
import { 
    connect, 
    useSelector 
} from 'react-redux';
import { fetchForecast12Hours } from '../../../store/actions/weatherActions';
import ForecastsList from './ForecastsList';

const ForecastsScreen = ({ fetchForecast12Hours }) => {
    const locationKey = useSelector(state => state.weatherReducer.locationKey);

    useEffect(() => {
        if(locationKey !== '') {
            fetchForecast12Hours(locationKey);
        }
    }, [locationKey]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                backgroundColor={SEARCH_BUTTON_COLOR} 
                barStyle="dark-content" 
            />
            <ForecastsList />
        </SafeAreaView>
    );
};

ForecastsScreen.navigationOptions = ({
    navigation: { getParam, goBack }
}) => {
    return {
        headerTitle: getParam('city'),
        headerTitleContainerStyle: {
            ...globalStyles.headerTitleContainer,
        },
        headerLeft: () => (
            <BackButton 
                onPress={() => {
                    setTimeout(() => goBack(), 500);
                }} 
            />
        ),
    };
}

function mapStateToProps() {
    return {};
}
  
export default connect(mapStateToProps, {
    fetchForecast12Hours
})(ForecastsScreen);