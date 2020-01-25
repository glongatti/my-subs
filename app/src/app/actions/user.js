import UserService from '../../server/user';
import StorageService from '../../services/storage';
import { ACTION_OPEN_TABS_SCREEN, ACTION_OPEN_INITIAL } from './navigator';
import { loadSettings } from './settings';

export const ACTION_LOG_OUT = 'ACTION_LOG_OUT:user';

export function registerUser({ name, email, password }) {
  return async (dispatch) => {
    try {
      const user = await UserService.createUser({ name, email, password });
      await StorageService.createUserAuthData({ token: user.token });
      await StorageService.createUserData({
        id: user.id,
        name: user.name,
        email: user.email,
      });
      dispatch({ type: ACTION_OPEN_TABS_SCREEN.action });
    } catch (error) { /** */ }
  };
}

export function loginWithEmailPassword({ email, password }) {
  return async (dispatch) => {
    try {
      const user = await UserService.authenticateUser({ email, password });
      await StorageService.createUserAuthData({ token: user.token });
      await StorageService.createUserData({
        id: user.idUsuario,
        name: user.nome,
        email: user.email,
      });
      await dispatch(loadSettings());
      dispatch({ type: ACTION_OPEN_TABS_SCREEN.action });
    } catch (error) {
      //
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    await StorageService.reset();
    dispatch({ type: ACTION_OPEN_INITIAL.action });
  };
}
