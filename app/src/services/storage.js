import AsyncStorage from '@react-native-community/async-storage';

export const PERSIST_KEY_IS_LOGGED = '@MySubs:user:is_logged';
export const PERSIST_KEY_USER_DATA = '@MySubs:user:user_data';
export const PERSIST_KEY_USER_AUTH_DATA = '@MySubs:user:user_auth_data';

async function isAuthenticated() {
  const auth = await AsyncStorage.getItem(PERSIST_KEY_USER_AUTH_DATA);
  const isLogged = await AsyncStorage.getItem(PERSIST_KEY_IS_LOGGED);
  return (auth && isLogged);
}

async function getUserAuthData() {
  if (isAuthenticated()) return JSON.parse(await AsyncStorage.getItem(PERSIST_KEY_USER_AUTH_DATA));
}

async function createUserAuthData(auth) {
  await AsyncStorage.setItem(PERSIST_KEY_IS_LOGGED, JSON.stringify(true));
  await AsyncStorage.setItem(PERSIST_KEY_USER_AUTH_DATA, JSON.stringify(auth));
}

async function getUserData() {
  if (isAuthenticated()) return JSON.parse(await AsyncStorage.getItem(PERSIST_KEY_USER_DATA));
}

async function createUserData(data) {
  await AsyncStorage.setItem(PERSIST_KEY_USER_DATA, JSON.stringify(data));
}

async function reset() {
  await AsyncStorage.setItem(PERSIST_KEY_IS_LOGGED, JSON.stringify(false));
  await AsyncStorage.removeItem(PERSIST_KEY_USER_DATA);
  await AsyncStorage.removeItem(PERSIST_KEY_USER_AUTH_DATA);
}

export default {
  getUserAuthData,
  createUserAuthData,
  getUserData,
  createUserData,
  reset,
  isAuthenticated
};
