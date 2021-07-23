import { StyleSheet, Dimensions } from 'react-native';
import { SEARCH_BUTTON_COLOR } from '../../constants/colors';

export const globalStyles =  StyleSheet.create({
    noHeaderBorder: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    headerTitleContainer: {
        marginTop: 20,
        fontSize: 24,
    },
    marginBottomSpace: {
        marginBottom: 10,
    },
});


export const widthScale = Dimensions.get('window').width * 0.0025;
export const heightScale = Dimensions.get('window').height * 0.00115;