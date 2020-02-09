
import { MOCK_SUBS_LIST } from '../../utils/mock_data';
import SubscriptionServer from '../../server/subscription';

import StorageService from '../../services/storage';

export const ACTION_SET_SUBSCRIPTIONS = 'ACTION_SET_SUBSCRIPTIONS';

export function getSubscriptions() {
  return async (dispatch) => {
    try {
      const { id } = await StorageService.getUserData();
      const result = await SubscriptionServer.getAllSubscriptions(id);
      console.log('result lista', result);
      // passar result para o dispatch
      dispatch({ type: ACTION_SET_SUBSCRIPTIONS, payload: MOCK_SUBS_LIST });
    } catch (error) { /* empty */ }
  };
}

export function createSubscription(
  planTypeId, serviceName, currencyId, price, cancelRenewal = true,
  signatureDate, active
) {
  return async (dispatch) => {
    try {
      const user = await StorageService.getUserData();
      const objResponse = {
        idUser: user.id,
        idPlanType: planTypeId,
        idService: 2,
        service: serviceName,
        idCurrency: currencyId,
        price,
        cancelRenewal,
        dateSignature: signatureDate,
        active
      };
      await SubscriptionServer.createSubscription(objResponse);
      await dispatch(getSubscriptions());
    } catch (error) { /* */ }
  };
}
