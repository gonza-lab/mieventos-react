import { db } from '../firebase/firebase-config';
import { types } from '../types/types';

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

export const startAddCardFromServicios = (lastPosi) => {
  return async (dispatch) => {
    const newCard = await db.collection('pantallas/servicios/tarjetas').add({
      servicio: 'Modifique el servicio',
      precio: 'Modifique la informacion',
      hras: 'Modifique las horas',
      posicion: lastPosi + 1,
    });

    const cardInfo = await newCard.get();

    dispatch(addCardFromServicios({ ...cardInfo.data(), id: newCard.id }));
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
