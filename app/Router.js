import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Home';
import Register from './src/Pages/Register';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    }
  }
},
{
  initialRouteName: 'Register'
});

export default createAppContainer(AppNavigator);
