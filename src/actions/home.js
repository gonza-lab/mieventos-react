import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { types } from '../types/types';

export const startGetCardsFromHome = () => {
  return async (dispatch) => {
    const res = await db
      .collection('pantallas/home/tarjetas')
      .orderBy('posicion', 'asc')
      .get();

    const cards = [];

    res.forEach((doc) => {
      cards.push({ id: doc.id, ...doc.data() });
    });

    dispatch(loadCardsFromHome(cards));
  };
};

export const startAddCardFromHome = (lastPosi) => {
  return async (dispatch) => {
    const newCard = await db.collection('pantallas/home/tarjetas').add({
      titulo: 'Modifique el titulo',
      informacion: 'Modifique la informacion',
      lado: 'derecho',
      imagenes: [],
      posicion: lastPosi + 1,
    });

    const cardInfo = await newCard.get();

    dispatch(addCardFromHome({ ...cardInfo.data(), id: newCard.id }));
  };
};

export const startSaveCardFromHome = (id, card) => {
  return async () => {
    const result = await Swal.fire({
      title: 'Estas seguro?',
      text: 'No vas a ser capaz de revertir este cambio!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guardar!',
    });

    if (result.isConfirmed) {
      await db.doc(`pantallas/home/tarjetas/${id}`).set(card);
      Swal.fire('Guardado!', 'Tu tarjeta ha sido guardada', 'success');
    }
  };
};

export const startDeleteCardFromHome = (id) => {
  return async (dispatch) => {
    const result = await Swal.fire({
      title: 'Estas seguro?',
      text: 'No vas a ser capaz de revertir este cambio!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
    });

    if (result.isConfirmed) {
      await db.doc(`pantallas/home/tarjetas/${id}`).delete();
      dispatch(deleteCardFromHome(id));
      Swal.fire('Eliminado!', 'Tu tarjeta ha sido eliminada', 'success');
    }
  };
};

export const addImageToCard = (id, image) => ({
  type: types.homeCardAddImage,
  payload: {
    id,
    image,
  },
});

export const addCardFromHome = (newCard) => ({
  type: types.homeAddCard,
  payload: newCard,
});

export const loadCardsFromHome = (cards) => ({
  type: types.homeGetCards,
  payload: cards,
});

export const deleteCardFromHome = (id) => ({
  type: types.homeDeleteCard,
  payload: id,
});
