import RestService from '../services/rest';

async function createUser({ name, email, password }) {
  const user = { name, email, password };
  return RestService.postRest('User/RegisterUser', user);
}

async function authenticateUser({ email, password }) {
  const user = { email, password };
  return RestService.postRest('Login/Login', user);
}


export default {
  createUser,
  authenticateUser
};
