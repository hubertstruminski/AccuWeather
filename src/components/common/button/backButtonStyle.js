import { StyleSheet } from 'react-native';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';
import { widthScale } from '../globalStyle';

export default StyleSheet.create({
    container: {
        color: SEARCH_BUTTON_COLOR, 
        marginLeft: 15 * widthScale, 
        marginTop: 20,
    }
}); 