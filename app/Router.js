import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Home';
import Register from './src/Pages/Register';
import NewSub from './src/Pages/NewSub';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    }
  },
  NewSub: {
    screen: NewSub,
    navigationOptions: {
      headerShown: false,
    }
  },
},
{
  initialRouteName: 'NewSub'
});

export default createAppContainer(AppNavigator);
