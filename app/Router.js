import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from './src/Home';
import Register from './src/Pages/Register';
import colors from './src/utils/colors';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
      title: 'Cadastro',
      header: false,
      tabBarIcon: ({ tintColor }) => <Entypo name="shopping-bag" color={tintColor} size={24} />,
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: colors.primaryGreen,
      },
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        color: colors.primaryWhite
      }
    }
  }
},
{
  initialRouteName: 'Register'
});

export default createAppContainer(AppNavigator);
