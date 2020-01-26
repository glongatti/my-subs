import {
  ACTION_SET_SUBSCRIPTIONS
} from '../actions/subscriptions';

const initialState = {
  list: []
};

export default function subscriptions(state = initialState, action) {
  switch (action.type) {
    case ACTION_SET_SUBSCRIPTIONS: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default:
      return state;
  }
}
