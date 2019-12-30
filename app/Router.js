/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
// import { TouchableOpacity } from 'react-native';
import Home from './src/Home';
import Register from './src/Pages/Register';
import NewSub from './src/Pages/NewSub';
import EditSub from './src/Pages/EditSub';
import SubsList from './src/Pages/SubsList';
import Icon from './src/components/Icon';
import colors from './src/utils/colors';
import fonts from './src/utils/fonts';


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
  EditSub: {
    screen: EditSub,
    navigationOptions: {
      headerShown: false,
    }
  },
  TabsScreen: {
    screen: createBottomTabNavigator({
      SubsList: {
        screen: SubsList,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="LIST" color={tintColor} position="relative" top={3} size={25} />,
          tabBarLabel: 'Lista',
          headerShown: false,
        }
      },
      NewSub: {
        screen: NewSub,
        navigationOptions: {
          tabBarVisible: false,
          tabBarIcon: ({ tintColor }) => <Icon name="ADD_BUTTON" color={tintColor} position="relative" top={0} left={0} size={25} />,
          tabBarLabel: ' '
        },
      },
      Register: {
        screen: Register,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="PROFILE" color={tintColor} position="relative" top={2} left={0} size={23} />,
          tabBarLabel: 'Registro'
        }
      }
    }, {
      initialRouteName: 'SubsList',
      tabBarOptions: {
        labelStyle: {
          color: colors.primaryWhite,
          fontFamily: fonts.regular
        },
        activeTintColor: colors.primaryWhite,
        inactiveTintColor: colors.primaryWhite
      },
      tabBarComponent: (props) => (
        <BottomTabBar
          {...props}
          style={{ backgroundColor: colors.primaryGreen, paddingBottom: 7, height: 55 }}
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
