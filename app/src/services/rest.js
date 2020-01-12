import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import fetch from 'react-native-fetch-polyfill';
import Storage from './storage';
// import AuthService from '../server/auth';

const ENDPOINT_URL = 'https://localhost:3333/';

function showAlertError(title, message) {
  setTimeout(() => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Ok',
          onPress: () => {}
        }
      ],
      {
        cancelable: true
      }
    );
  }, 200);
}

async function request(method, uri, data = null, headers = {}, retry = 0) {
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

  if (!response.ok) {
    const isRefreshToken = method === 'post' && data.includes('refresh_token');

    const isAuthenticated = await Storage.isAuthenticated();
    if (isAuthenticated && response.status === 401 && !isRefreshToken) {
      if (retry === 1) {
        showAlertError('Sessão expirou...', 'Faça o login novamente, por favor...');
        // NavigatorService.navigate(UserActions.logOut());

        return Promise.reject();
      }
      try {
        // const authData = await Storage.getUserAuthData();
        // const auth = await AuthService.refreshToken(authData.refresh_token);
        const auth = '';
        await Storage.createUserAuthData(auth);
        headers.Authorization = `Bearer ${auth.access_token}`;
        return request(method, uri, data, headers, retry + 1);
      } catch (err) {
        showAlertError("I18n.t('sessionExpired')", "I18n.t('makeLoginAgain')");
        // NavigatorService.navigate(UserActions.logOut());
        return Promise.reject(err);
      }
    } else if (result.error && result.error.code === 400) {
      showAlertError("I18n.t('attention')", "I18n.t('userNotFound')");
      return Promise.reject(result.error.code);
    }
  }

  if (result.error) {
    return Promise.reject(Object.assign(new Error(), result.error));
  }

  if (result.success) {
    return result.data;
  }

  return result;
}

function publicHeader(header = {}) {
  header.Authorization = 'Basic ZDUwZTA1ZTJjN2M5NmZmMzY0NjYwYTdiOWM5M2ZmNDc6MDQ1NzU3ZWQ2ZjFmZjBiNWQ5YmE5NDRjNGNhOWU1OTNlZDk1OWUyMmE0N2FlOGMxZmRjN2I5ZmY0OWIxNTU4MA=';
  header['Content-Type'] = 'application/x-www-form-urlencoded';
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
  const formBody = Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
  return request('post', uri, formBody, publicHeader(header));
}

async function authenticatedHeader(header = {}) {
  const auth = await Storage.getUserAuthData();
  if (auth) header.Authorization = `Bearer ${auth.access_token}`;
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
