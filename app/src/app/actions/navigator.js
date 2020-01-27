/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';


import { createStackNavigator } from 'react-navigation-stack';
import { createReduxContainer, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';


import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import Initial from '../../view/pages/initial';
import Register from '../../view/pages/register';
import Login from '../../view/pages/login';
import NewSub from '../../view/pages/new-subs';
import EditSub from '../../view/pages/edit-subs';
import SubsList from '../../view/pages/subs-list';
import Profile from '../../view/pages/profile';
import Splash from '../../view/pages/splash';
import ForgotPassword from '../../view/pages/forgot-password';

import Icon from '../../view/components/icon';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

export const ACTION_OPEN_FORGOT_PASSWORD = {
  action: 'ACTION_OPEN_FORGOT_PASSWORD',
  routeName: 'ForgotPassword'
};

export const ACTION_OPEN_SPLASH = {
  action: 'ACTION_OPEN_SPLASH',
  routeName: 'Splash'
};

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
  Profile: {
    screen: Profile,
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
      fontFamily: fonts.regular,
      margin: 0,
      padding: 0
    },
    activeTintColor: colors.primaryWhite,
    inactiveTintColor: colors.primaryWhite,
  },
  tabBarComponent: (props) => (
    <BottomTabBar
      {...props}
      style={{ backgroundColor: colors.primaryGreen, paddingBottom: 7, height: 60, }}
    />
  ),
  headerShown: false,
  headerMode: 'none',
  navigationOptions: {
    header: null,
  }
});

const RootNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    }
  },
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
  ForgotPassword: {
    screen: ForgotPassword,
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
  initialRouteName: 'Splash',
  // headerMode: 'none',
});

const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

const mapStateToProps = (state) => ({
  state: state.navigation
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, NavigationMiddleware };
