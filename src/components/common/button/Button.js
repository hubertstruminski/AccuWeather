import React from 'react';
import { SEARCH_BUTTON_LABEL } from '../../../constants/labels';
import { View, TouchableWithoutFeedback, Text} from 'react-native';
import styles from './buttonStyle';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';

const Button = ({ 
    onPress = () => {},
    title = SEARCH_BUTTON_LABEL,
    backgroundColor = SEARCH_BUTTON_COLOR, 
}) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View 
                style={[
                    styles.container
                , {
                    backgroundColor: backgroundColor
                }]}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Button;