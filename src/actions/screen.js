import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';

const { types } = require('../types/types');

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const startGetScreens = () => {
  return async (dispatch) => {
    const res = await fetchWithToken('screen', 'GET');
    const body = await (await res).json();

    if (body.ok) {
      dispatch(getScreens(body.screens));
    }
  };
};

export const startAddCard = ({ screenName, id }, card) => {
  return async (dispatch) => {
    const res = await fetchWithToken('card', 'POST', { ...card, screen: id });
    const { ok, ...rest } = await res.json();

    if (ok) {
      dispatch(addCard({ ...rest, screenName }));
      Toast.fire({
        icon: 'success',
        title: 'La tarjeta se ha añadido con exito!',
      });
    } else {
      Swal.fire('Oops', 'Ha ocurrido un error al guardar la tarjeta.', 'error');
    }
  };
};

export const startSaveCard = (screenName, card) => {
  return async (dispatch) => {
    const res = await fetchWithToken('card', 'PUT', { ...card });
    const { ok, ...rest } = await res.json();

    if (ok) {
      dispatch(saveCard({ ...rest, screenName, _id: card._id }));
      Toast.fire({
        icon: 'success',
        title: 'La tarjeta se a guardado con exito!',
      });
    } else {
      Swal.fire('Oops', 'Ha ocurrido un error al guardar la tarjeta.', 'error');
    }
  };
};

export const startDeleteCard = (screenName, _id) => {
  return async (dispatch) => {
    const res = await fetchWithToken('card', 'DELETE', { _id });
    const { ok } = await res.json();

    if (ok) {
      dispatch(deleteCard({ _id, screenName }));
      Toast.fire({
        icon: 'success',
        title: 'La tarjeta se a eliminado con exito!',
      });
    } else {
      Swal.fire(
        'Oops',
        'Ha ocurrido un error al eliminar la tarjeta.',
        'error'
      );
    }
  };
};

const getScreens = (screens) => ({
  type: types.screenGetScreens,
  payload: screens,
});

const addCard = (card) => ({
  type: types.screenAddCard,
  payload: card,
});

const saveCard = (card) => ({
  type: types.screenSaveCard,
  payload: card,
});

const deleteCard = (card) => ({
  type: types.screenDeleteCard,
  payload: card,
});
