import SettingsService from '../../server/settings';

export const ACTION_SET_FORM_SETTINGS = 'ACTION_SET_FORM_SETTINGS:settings';

export function loadSettings() {
  return async (dispatch) => {
    try {
      const [currencies, planTypes] = await Promise.all([
        SettingsService.getCurrencies(),
        SettingsService.getPlanTypes()
      ]);

      dispatch({
        type: ACTION_SET_FORM_SETTINGS,
        payload: {
          currencies,
          planTypes
        }
      });
    } catch (error) { /** */ }
  };
}
