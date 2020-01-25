import { combineReducers } from 'redux';

import { ACTION_LOG_OUT } from '../actions/user';
import navigation from './navigator';
import subscriptions from './subscriptions';
import settings from './settings';

const appReducer = combineReducers({
  navigation,
  subscriptions,
  settings
});

export default (state, action) => {
  if (action.type === ACTION_LOG_OUT) {
    state.navigation.index = 0;
    state.navigation.routes = [state.navigation.routes[0]];
    state.user = undefined;
  }

  return appReducer(state, action);
};
