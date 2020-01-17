import UserService from '../../server/user';
import StorageService from '../../services/storage';
import { ACTION_OPEN_TABS_SCREEN } from './navigator';

export const ACTION_LOG_OUT = 'ACTION_LOG_OUT:user';

export function registerUser({ name, email, password }) {
  return async (dispatch) => {
    try {
      const user = await UserService.createUser({ name, email, password });
      await StorageService.createUserAuthData({ token: 'tokenPadrao' });
      await StorageService.createUserData({
        id: user.id,
        name: user.name,
        email: user.email,
      });
      dispatch({ type: ACTION_OPEN_TABS_SCREEN.action });
    } catch (error) { /** */ }
  };
}
