import { StyleSheet } from 'react-native';
import { 
    SEARCH_BUTTON_COLOR, 
    TRANSPARENT_COLOR, 
    WHITE_COLOR 
} from '../../../constants/colors';

export default StyleSheet.create({
    container: {
        width: 350,
        height: 64,
        borderRadius: 32,
        borderColor: TRANSPARENT_COLOR,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: SEARCH_BUTTON_COLOR,
    },
    text: {
        fontSize: 24,
        fontWeight: '400',
        letterSpacing: 3,
        color: WHITE_COLOR,
    }
});