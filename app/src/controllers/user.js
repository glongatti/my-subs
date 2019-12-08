import { postCreateUser } from '../services/user';

function createUser({ name, email, password }) {
  return postCreateUser({ name, email, password });
}

export {
  createUser,
};
