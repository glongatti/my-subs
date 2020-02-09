import RestService from '../services/rest';

async function createSubscription(data) {
  return RestService.postAuthenticated('Subscription/RegisterSub', data);
}

async function getAllSubscriptions(userId) {
  return RestService.postAuthenticated(`Subscription/SubscriptionFindByIdUser?id=${userId}`);
}


export default {
  createSubscription,
  getAllSubscriptions
};
