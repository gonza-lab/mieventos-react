import { types } from '../types/types';
import { firebase } from '../firebase/firebase-config';
import swal from 'sweetalert';
import { finishLoading, startLoading } from './ui';

export const loginWithEmailAndPassword = ({ email, password }) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid));
        dispatch(finishLoading());
      })
      .catch(({ message }) => {
        swal('Oops', message, 'error');
        dispatch(finishLoading());
      });
  };
};

export const login = (uid) => ({
  type: types.login,
  payload: {
    uid,
  },
});
