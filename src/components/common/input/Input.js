import React, { 
    useEffect, 
    useRef 
} from 'react';
import { TextInput } from 'react-native';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';
import { TYPE_CITY_LABEL } from '../../../constants/labels';
import styles from '../input/inputStyle';

const Input = ({
    city,
    setCity
}) => {
    let input = useRef(null);

    useEffect(() => input.focus(), []);

    return (
        <TextInput 
            ref={ref => input = ref}
            placeholder={TYPE_CITY_LABEL}
            style={[styles.container, styles.marginBottomSpace]}
            textAlignVertical='center'
            placeholderTextColor={SEARCH_BUTTON_COLOR}
            value={city}
            onChangeText={(text) => setCity(text)}
        />
    );
}

export default Input;