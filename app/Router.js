import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native';
import Home from './src/Home';
import Register from './src/Pages/Register';
import NewSub from './src/Pages/NewSub';
import Icon from './src/components/Icon';

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
    navigationOptions: ({ navigation }) => ({
      headerLeft:
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Icon name="ARROW_LEFT" />
  </TouchableOpacity>,
      headerStyle: {
        backgroundColor: 'transparent'
      }
    })
  },
},
{
  initialRouteName: 'NewSub'
});

export default createAppContainer(AppNavigator);
