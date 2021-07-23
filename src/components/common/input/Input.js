import React from 'react';
import { TextInput } from 'react-native';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';
import { TYPE_CITY_LABEL } from '../../../constants/labels';
import styles from '../input/inputStyle';

const Input = props => {
    return (
        <TextInput 
            placeholder={TYPE_CITY_LABEL}
            style={[styles.container, styles.marginBottomSpace]}
            textAlignVertical='center'
            placeholderTextColor={SEARCH_BUTTON_COLOR}
        />
    );
}

export default Input;