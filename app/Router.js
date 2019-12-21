/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
// import { TouchableOpacity } from 'react-native';
import Home from './src/Home';
import Register from './src/Pages/Register';
import NewSub from './src/Pages/NewSub';
import SubsList from './src/Pages/SubsList';
import Icon from './src/components/Icon';
import colors from './src/utils/colors';

// const navigationOptions = ({ navigation }) => ({
//   headerLeft:
//   <TouchableOpacity onPress={() => navigation.goBack()}>
//     <Icon name="ARROW_LEFT" />
//   </TouchableOpacity>,
//   headerStyle: {
//     backgroundColor: 'transparent'
//   }
// });


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  SubsList: {
    screen: SubsList,
    navigationOptions: {
      headerShown: false,
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    }
  },
  TabsScreen: {
    screen: createBottomTabNavigator({
      SubsList: {
        screen: SubsList,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="LIST" color={tintColor} position="relative" top={5} />,
          tabBarLabel: 'Lista',
          headerShown: false,
        }
      },
      NewSub: {
        screen: NewSub,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="ADD_BUTTON" color={tintColor} position="relative" top={1} left={1} size={26} />,
          tabBarLabel: 'Novo'
        }
      },
      Register: {
        screen: Register,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="PROFILE" color={tintColor} position="relative" top={3} left={0} size={26} />,
          tabBarLabel: 'Registro'
        }
      }
    }, {
      initialRouteName: 'NewSub',
      tabBarOptions: {
        labelStyle: {
          color: colors.primaryWhite
        },
        activeTintColor: colors.primaryWhite,
        inactiveTintColor: colors.primaryWhite
      },
      tabBarComponent: (props) => (
        <BottomTabBar
          {...props}
          style={{ backgroundColor: colors.primaryGreen }}
        />
      ),
      headerShown: false,
      headerMode: 'none'
    })
  }
},
{
  initialRouteName: 'TabsScreen',
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);
