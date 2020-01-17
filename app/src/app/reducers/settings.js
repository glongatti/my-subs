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
      const filteredCurrencies = action.payload.currencies
        .filter((currency) => currency.code.trim() === 'USD' || currency.code.trim() === 'BRL');
      return {
        ...state,
        currencies: filteredCurrencies,
        planTypes: action.payload.planTypes,
      };
    }
    default:
      return state;
  }
}
