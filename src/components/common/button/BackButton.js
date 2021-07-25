import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './backButtonStyle';

const BackButton = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Icon 
                name='arrow-circle-left'
                style={styles.container}
                size={27}
            />
        </TouchableWithoutFeedback>
    );
}

export default BackButton;