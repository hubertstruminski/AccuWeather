import React, { useCallback } from 'react';
import { SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import styles from './startScreenStyle';
import { globalStyles } from '../../common/globalStyle';
import { ACCUWEATHER_APP_LABEL } from '../../../constants/labels';
import Button from '../../common/button/Button';
import Input from '../../common/input/Input';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import TouchableArea from './TouchableArea';

const StartScreen = ({ navigation }) => {

  const onPress = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableArea>
        <Input />
        <Button />
        <KeyboardSpacer/>
      </TouchableArea> 
      
    </SafeAreaView>
  );
};

StartScreen.navigationOptions = () => {
  return {
    headerTitle: ACCUWEATHER_APP_LABEL,
    headerTitleContainerStyle: {
      ...globalStyles.headerTitleContainer,
    },
  };
}

export default StartScreen;