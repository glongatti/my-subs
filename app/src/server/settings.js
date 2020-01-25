import RestService from '../services/rest';

async function getCurrencies() {
  return RestService.getAuthenticated('Currency/GetAllCurrency');
}

async function getPlanTypes() {
  return RestService.getAuthenticated('PlanType/GetAllPlanType');
}


export default {
  getCurrencies,
  getPlanTypes
};
