import { StyleSheet } from 'react-native';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';
import forecastItemStyles from '../../common/forecasts/forecastItemStyle';
import { heightScale } from '../../common/globalStyle';

export default StyleSheet.create({
    container: {
        marginTop: 15 * heightScale,
        ...forecastItemStyles.rowContainer,
    },
    text: {
        color: SEARCH_BUTTON_COLOR,
        fontWeight: '700',
        fontSize: 15 * heightScale
    }
});