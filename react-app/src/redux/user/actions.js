import types from '../types';
import axios from 'axios';
import ui from '../ui/actions';
import { UiToast } from '../../components/ui/toast/Toasj';

const login = ({ id }) => ({
  type: types.USER_LOGIN,
  payload: { id },
});

const startLogin = (user) => {
  return async (dispatch) => {
    dispatch(ui.toggleLogging());
    try {
      const { data } = await axios.post('/api/user/login', user);
      localStorage.setItem('token', data.jwt);
      dispatch(login(data));
    } catch ({ response }) {}
    dispatch(ui.toggleLogging());
  };
};

const startSignUp = (user) => {
  return async (dispatch) => {
    dispatch(ui.toggleRegistering());
    try {
      const { data } = await axios.post('/api/user', user);
      localStorage.setItem('token', data.jwt);
      dispatch(login(data));
    } catch ({ response }) {
      const { data } = response;
      UiToast.fire({ title: data.error, icon: 'error' });
    }
    dispatch(ui.toggleRegistering());
  };
};

export default { startLogin, login, startSignUp };
