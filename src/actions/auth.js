import { types } from '../types/types';
import { firebase } from '../firebase/firebase-config';
import Swet from 'sweetalert2';
import { finishLoading, startLoading } from './ui';
import { fetchWithOutToken } from '../helpers/fetch';

export const loginWithEmailAndPassword = (user) => {
  return async (dispatch) => {
    dispatch(startLoading());

    const res = await fetchWithOutToken('auth/login', 'POST', user);
    const userDB = await res.json();

    if (userDB.ok) {
      localStorage.setItem('x-token', userDB.token);
      dispatch(login(user.id));
    } else {
      Swet.fire('Oops..', userDB.msg, 'error');
    }

    dispatch(finishLoading());
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const login = (uid) => ({
  type: types.login,
  payload: {
    uid,
  },
});

export const logout = () => ({
  type: types.logout,
});
