import React, { useCallback } from 'react';
import { TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import styles from './touchableAreaStyle';

const TouchableArea = ({ children }) => {

    const onPress = useCallback(() => {
        Keyboard.dismiss();
    }, []);

    return (
        <TouchableWithoutFeedback 
            onPress={onPress}
        >
            <View style={styles.container}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default TouchableArea;