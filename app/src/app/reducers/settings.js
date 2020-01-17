import {
  ACTION_SET_FORM_SETTINGS
} from '../actions/settings';

const initialState = {
  currencies: [],
  planTypes: [],
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case ACTION_SET_FORM_SETTINGS: {
      return {
        ...state,
        currencies: action.payload.currencies,
        planTypes: action.payload.planTypes,
      };
    }
    default:
      return state;
  }
}
