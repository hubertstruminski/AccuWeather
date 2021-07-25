import { StyleSheet } from 'react-native';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';
import { 
    globalStyles, 
    heightScale, 
    widthScale 
} from '../globalStyle';

export default StyleSheet.create({
    container: {
        width: 320 * widthScale,
        height: 48 * heightScale,
        borderRadius: 32,
        borderColor: SEARCH_BUTTON_COLOR,
        borderWidth: 2,
        paddingLeft: 15 * widthScale,
        fontSize: 17 * heightScale,
    },
    marginBottomSpace: {
        ...globalStyles.marginBottomSpace,
    },
});