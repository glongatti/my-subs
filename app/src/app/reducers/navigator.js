import { NavigationActions } from 'react-navigation';
import * as Actions from '../actions/navigator';

const { router } = Actions.RootNavigator;
const initialAction = router.getActionForPathAndParams(Actions.ACTION_OPEN_INITIAL.routeName);
const initialState = router.getStateForAction(initialAction);

export default function navigation(state = initialState, action) {
  let nextState;

  switch (action.type) {
    case Actions.ACTION_OPEN_LOGIN.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({
          routeName: Actions.ACTION_OPEN_LOGIN.routeName
        }),
        state
      );
      break;
    case Actions.ACTION_OPEN_REGISTER.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({
          routeName: Actions.ACTION_OPEN_REGISTER.routeName
        }),
        state
      );
      break;
    case Actions.ACTION_OPEN_INITIAL.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({
          routeName: Actions.ACTION_OPEN_INITIAL.routeName
        }),
        state
      );
      break;
    case Actions.ACTION_OPEN_SUBS_LIST.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({
          routeName: Actions.ACTION_OPEN_SUBS_LIST.routeName
        }),
        state
      );
      break;
    case Actions.ACTION_OPEN_TABS_SCREEN.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({
          routeName: Actions.ACTION_OPEN_TABS_SCREEN.routeName
        }),
        state
      );
      break;
    case Actions.ACTION_OPEN_EDIT_SUBS.action:
      nextState = router.getStateForAction(
        NavigationActions.navigate({
          routeName: Actions.ACTION_OPEN_EDIT_SUBS.routeName
        }),
        state
      );
      break;
    default:
      nextState = router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
