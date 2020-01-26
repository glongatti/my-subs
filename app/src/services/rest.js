import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import fetch from 'react-native-fetch-polyfill';
import Storage from './storage';
// import AuthService from '../server/auth';

const ENDPOINT_URL = 'https://mysubsapi.azurewebsites.net/api/';

function showAlertError(title, message) {
  setTimeout(() => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Ok',
          onPress: () => { }
        }
      ],
      {
        cancelable: true
      }
    );
  }, 200);
}

async function request(method, uri, data = null, headers = {}) {
  if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';

  const state = await NetInfo.fetch();
  if (!state.isConnected) {
    showAlertError(
      'OPS... Sem conexão',
      'Você está sem conexão com a internet, tente novamente mais tarde...'
    );
    return Promise.reject();
  }

  const response = await fetch(`${ENDPOINT_URL}${uri}`, {
    method,
    headers,
    body: data,
    timeout: 20000
  });
  const result = await response.json();

  if (!result.resultType || result.resultType === 0) {
    if (result.message) {
      showAlertError('Atenção', result.message);
      return Promise.reject();
    }
  }

  if (result.error) {
    showAlertError('Atenção', result.error);
    return Promise.reject();
  }

  if (result.success) {
    return result.data;
  }

  return result;
}

function publicHeader(header = {}) {
  header['Content-Type'] = 'application/json';

  return header;
}

async function getRest(uri, query, header) {
  if (query) {
    const queryParams = Object.keys(query)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
      .join('&');
    uri = uri.concat('?').concat(queryParams);
  }

  return request('get', uri, null, publicHeader(header));
}

async function postRest(uri, data, header) {
  return request('post', uri, JSON.stringify(data), publicHeader(header));
}

async function authenticatedHeader(header = {}) {
  const auth = await Storage.getUserAuthData();
  if (auth) header.Authorization = `Bearer ${auth.token}`;
  return header;
}

async function getAuthenticated(uri, query, data, header) {
  if (query) {
    const queryParams = Object.keys(query)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
      .join('&');
    uri = uri.concat('?').concat(queryParams);
  }
  header = await authenticatedHeader(header);
  return request('get', uri, JSON.stringify(data), header);
}

async function postAuthenticated(uri, data = {}, header) {
  header = await authenticatedHeader(header);
  return request('post', uri, JSON.stringify(data), header);
}

async function putAuthenticated(uri, data = {}, header) {
  header = await authenticatedHeader(header);
  return request('put', uri, JSON.stringify(data), header);
}

export default {
  getRest,
  postRest,
  getAuthenticated,
  postAuthenticated,
  putAuthenticated
};
