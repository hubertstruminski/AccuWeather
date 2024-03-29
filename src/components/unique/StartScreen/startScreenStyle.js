import { StyleSheet, Platform } from 'react-native';
import { heightScale } from '../../common/globalStyle';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? 25 * heightScale : 10 * heightScale,
  },
});