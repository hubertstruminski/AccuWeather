import React, { 
    useEffect, 
    useState 
} from 'react';
import { View, Text } from 'react-native';
import { 
    FORECAST_ITEM_BACKGROUND_COLOR, 
    WHITE_COLOR 
} from '../../../constants/colors';
import { 
    convertEpochDatetimeToTime, 
    convertFahrenheitToCelsius 
} from '../../../util/parsers';
import styles from './forecastItemStyle';

const ForecastItem = ({ 
    item: { 
        EpochDateTime, 
        Temperature: { 
            Value,
        },
    },
    index,
}) => {
    const [date, setDate] = useState(null);
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        setDate(convertEpochDatetimeToTime(EpochDateTime));
        setTemperature(convertFahrenheitToCelsius(Value));
    }, []);

    return (
        <View 
            style={[
                styles.container, {
                    backgroundColor: index % 2 == 0 ? WHITE_COLOR : FORECAST_ITEM_BACKGROUND_COLOR,
                }
            ]}
        >   
            <View style={[styles.rowContainer, styles.noRowContainer]}>
                <Text style={styles.dateText}>{date}</Text>
            </View>    
            <View style={styles.rowContainer}>
                <View style={styles.temperatureContainer}>
                    <Text style={styles.temperatureText}>{temperature}</Text>
                    <Text style={styles.degreeText}>o</Text>
                    <Text style={styles.temperatureText}>C</Text>
                </View>
            </View>
        </View>
    );
};

export default ForecastItem;