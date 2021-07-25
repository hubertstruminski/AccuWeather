import { StyleSheet, Dimensions } from 'react-native';

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

const baseWidth = 350;
const baseHeight = 680;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const widthScale = deviceWidth / baseWidth;
export const heightScale = deviceHeight / baseHeight;