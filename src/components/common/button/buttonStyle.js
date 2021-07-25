import { StyleSheet } from 'react-native';
import { 
    SEARCH_BUTTON_COLOR, 
    TRANSPARENT_COLOR, 
    WHITE_COLOR 
} from '../../../constants/colors';
import { 
    heightScale, 
    widthScale 
} from '../globalStyle';

export default StyleSheet.create({
    container: {
        width: 320 * widthScale,
        height: 48 * heightScale,
        borderRadius: 32,
        borderColor: TRANSPARENT_COLOR,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: SEARCH_BUTTON_COLOR,
    },
    text: {
        fontSize: 19 * heightScale,
        fontWeight: '400',
        letterSpacing: 3,
        color: WHITE_COLOR,
    }
});