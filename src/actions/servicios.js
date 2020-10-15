import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { types } from '../types/types';

export const startAddCardFromServicios = (lastPosi) => {
  return async (dispatch) => {
    const newCard = await db.collection('pantallas/servicios/tarjetas').add({
      servicio: 'Modifique el servicio',
      precio: 'Modifique la informacion',
      horas: 'Modifique las horas',
      posicion: lastPosi + 1,
    });

    const cardInfo = await newCard.get();

    dispatch(addCardFromServicios({ ...cardInfo.data(), id: newCard.id }));
  };
};

export const startLoadCardsFromServicios = () => {
  return async (dispatch) => {
    const res = await db
      .collection('pantallas/servicios/tarjetas')
      .orderBy('posicion', 'asc')
      .get();

    const cards = [];

    res.forEach((doc) => {
      cards.push({ id: doc.id, ...doc.data() });
    });

    dispatch(loadCardsFromServicios(cards));
  };
};

export const startSaveCardFromServicios = (id, card) => {
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
      await db.doc(`pantallas/servicios/tarjetas/${id}`).set(card);
      Swal.fire('Guardado!', 'Tu tarjeta ha sido guardada', 'success');
    }
  };
};

export const startDeleteCardFromServicios = (id) => {
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
      await db.doc(`pantallas/servicios/tarjetas/${id}`).delete();
      dispatch(deleteCardFromServicios(id));
      Swal.fire('Eliminado!', 'Tu tarjeta ha sido eliminada', 'success');
    }
  };
};

export const startLoadPresentationFromServicios = () => {
  return async (dispatch) => {
    const res = await db.doc('pantallas/servicios').get();

    dispatch(loadPresentationFromServicios(res.data()));
  };
};

export const startSavePresentationFromServicios = (presentation) => {
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
      await db.doc(`pantallas/servicios`).set(presentation);
      Swal.fire('Guardado!', 'Tu presentacion ha sido guardada', 'success');
    }
  };
};

export const addCardFromServicios = (newCard) => ({
  type: types.serviciosAddCard,
  payload: newCard,
});

export const loadCardsFromServicios = (cards) => ({
  type: types.serviciosGetCards,
  payload: cards,
});

export const deleteCardFromServicios = (id) => ({
  type: types.serviciosDeleteCard,
  payload: id,
});

export const loadPresentationFromServicios = (presentation) => ({
  type: types.serviciosGetPresentation,
  payload: presentation,
});
