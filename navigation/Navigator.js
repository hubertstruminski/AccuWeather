import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { globalStyles } from '../src/components/common/globalStyle';
import StartScreen from '../src/components/unique/StartScreen/StartScreen';
import { SEARCH_BUTTON_COLOR } from '../src/constants/colors';


const MainNavigation = createStackNavigator({
  StartScreen: {
    screen: StartScreen,
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        ...globalStyles.noHeaderBorder,
      },
      headerTintColor: SEARCH_BUTTON_COLOR,
    },
  },
}, {
  initialRouteName: 'StartScreen',
});

export default createAppContainer(MainNavigation);