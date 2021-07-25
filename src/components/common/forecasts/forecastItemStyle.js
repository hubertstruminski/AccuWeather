import { StyleSheet } from 'react-native';
import { heightScale } from '../globalStyle';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 54 * heightScale,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    temperatureContainer: {
        flexDirection: 'row', 
        alignItems: 'flex-start',
    },
    temperatureText: {
        fontSize: 16 * heightScale, 
        lineHeight: 27 * heightScale,
    },
    degreeText: {
        fontSize: 11 * heightScale, 
        lineHeight: 17 * heightScale,
    },
    dateText: {
        fontSize: 16 * heightScale,
    },
    rowContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noRowContainer: {
        flexDirection: undefined,
    }
});