import { StyleSheet } from 'react-native';
import { BLACK_COLOR, SEARCH_BUTTON_COLOR } from '../../../constants/colors';
import { globalStyles } from '../globalStyle';

export default StyleSheet.create({
    container: {
        width: 350,
        height: 64,
        borderRadius: 32,
        borderColor: SEARCH_BUTTON_COLOR,
        borderWidth: 2,
        paddingLeft: 15,
        fontSize: 20
    },
    marginBottomSpace: {
        ...globalStyles.marginBottomSpace,
    },
});