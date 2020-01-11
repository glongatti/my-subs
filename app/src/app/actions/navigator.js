/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';


import { createStackNavigator } from 'react-navigation-stack';
import { createReduxContainer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';


import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import Initial from '../../Pages/Initial';
import Register from '../../Pages/Register';
import Login from '../../Pages/Login';
import NewSub from '../../Pages/NewSub';
import EditSub from '../../Pages/EditSub';
import SubsList from '../../Pages/SubsList';
import Icon from '../../components/Icon';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

export const ACTION_OPEN_NEW_SUB = {
  action: 'ACTION_OPEN_NEW_SUB',
  routeName: 'NewSub'
};

export const ACTION_OPEN_REGISTER = {
  action: 'ACTION_OPEN_REGISTER',
  routeName: 'Register'
};

export const ACTION_OPEN_LOGIN = {
  action: 'ACTION_OPEN_LOGIN',
  routeName: 'Login'
};

export const ACTION_OPEN_INITIAL = {
  action: 'ACTION_OPEN_INITIAL',
  routeName: 'Initial'
};

export const ACTION_OPEN_SUBS_LIST = {
  action: 'ACTION_OPEN_SUBS_LIST',
  routeName: 'SubsList'
};

export const ACTION_OPEN_TABS_SCREEN = {
  action: 'ACTION_OPEN_TABS_SCREEN',
  routeName: 'TabsScreen'
};

export const ACTION_OPEN_EDIT_SUBS = {
  action: 'ACTION_OPEN_EDIT_SUBS',
  routeName: 'EditSub'
};

const NavigationMiddleware = createReactNavigationReduxMiddleware((state) => state.navigation);

const TabNavigator = createBottomTabNavigator({
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
      tabBarIcon: ({ tintColor }) => <Icon name="ADD_BUTTON" color={tintColor} position="relative" top={0} left={0} size={45} />,
      tabBarLabel: ' '
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="PROFILE" color={tintColor} position="relative" top={2} left={0} size={23} />,
      tabBarLabel: 'Perfil'
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
      style={{ backgroundColor: colors.primaryGreen, paddingBottom: 7, height: 60, }}
    />
  ),
  headerShown: false,
  headerMode: 'none'
});

const RootNavigator = createStackNavigator({
  Initial: {
    screen: Initial,
    navigationOptions: {
      headerShown: false,
    }
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
      header: null,
    }
  },
  Login: {
    screen: Login,
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
    screen: TabNavigator
  }
},
{
  initialRouteName: 'Initial',
  // headerMode: 'none',
});

const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = (state) => ({
  state: state.navigation
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, NavigationMiddleware };
