import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';

const BackButton = ({
    onPress
}) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Icon 
                name="arrow-circle-left"
                style={{ color: SEARCH_BUTTON_COLOR, marginLeft: 15, marginTop: 20 }}
                size={27}
            >

            </Icon>
        </TouchableWithoutFeedback>
    );
}

export default BackButton;