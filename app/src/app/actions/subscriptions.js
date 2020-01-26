
import { MOCK_SUBS_LIST } from '../../utils/mock_data';

export const ACTION_SET_SUBSCRIPTIONS = 'ACTION_SET_SUBSCRIPTIONS';

export function getSubscriptions() {
  return async (dispatch) => {
    try {
      //   const subscriptions = await fetch();
      dispatch({ type: ACTION_SET_SUBSCRIPTIONS, payload: MOCK_SUBS_LIST });
    } catch (error) { /* empty */ }
  };
}
