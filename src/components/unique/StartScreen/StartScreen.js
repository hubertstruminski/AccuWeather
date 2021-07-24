import React, { useCallback, useState } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import styles from './startScreenStyle';
import { globalStyles } from '../../common/globalStyle';
import { ACCUWEATHER_APP_LABEL } from '../../../constants/labels';
import Button from '../../common/button/Button';
import Input from '../../common/input/Input';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import TouchableArea from './TouchableArea';
import { SEARCH_BUTTON_COLOR } from '../../../constants/colors';
import { fetchLocationKey } from '../../../store/actions/weatherActions';
import { connect } from 'react-redux';

const StartScreen = ({ 
  navigation: { navigate }, 
  fetchLocationKey 
}) => {
  const [city, setCity] = useState('');

  const onPress = useCallback(() => {
    if(city !== '') {
      fetchLocationKey(city);
      navigate('ForecastsScreen', { city });
    }
  }, [city]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor={SEARCH_BUTTON_COLOR} 
        barStyle="dark-content" 
      />
      <TouchableArea>
        <Input 
          city={city}
          setCity={setCity}
        />
        <Button 
          onPress={onPress}
        />
        <KeyboardSpacer topSpacing={Platform.OS === 'android' ? 30 : 0} />
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

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, {
  fetchLocationKey
})(StartScreen);