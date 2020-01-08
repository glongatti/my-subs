import { postCreateUser, postLoginUser } from '../services/user';

function createUser({ name, email, password }) {
  return postCreateUser({ name, email, password });
}

function authenticateUser({ email, password }) {
  return postLoginUser({ email, password });
}

export {
  createUser,
  authenticateUser
};
