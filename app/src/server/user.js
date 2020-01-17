import RestService from '../services/rest';

async function createUser({ name, email, password }) {
  const user = { name, email, password };
  return RestService.postRest('User/RegisterUser', user);
}


export default {
  createUser
};
