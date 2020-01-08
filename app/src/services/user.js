import axios from 'axios';
import { apiPath, requestDefaultHeader } from './api';

async function postCreateUser({ name, email, password }) {
  return axios.post(`${apiPath}/User/RegisterUser`, {
    name,
    email,
    password
  }, requestDefaultHeader);
}

async function postLoginUser({ email, password }) {
  return axios.post(`${apiPath}/User/Login`, {
    email,
    password
  });
}


export {
  postCreateUser,
  postLoginUser
};
