import { db } from '../firebase/firebase-config';
import { types } from '../types/types';

export const startGetCardsFromHome = () => {
  return async (dispatch) => {
    const res = await db.collection('pantallas/home/tarjetas').get();

    const cards = [];

    res.forEach((doc) => {
      cards.push({ id: doc.id, ...doc.data() });
    });

    dispatch(loadCardsFromHome(cards));
  };
};

export const startAddCardFromHome = () => {
  return async (dispatch) => {
    const newCard = await db.collection('pantallas/home/tarjetas').add({
      titulo: 'Modifique el titulo',
      informacion: 'Modifique la informacion',
      lado: 'derecho',
      imagenes: [],
    });

    const cardInfo = await newCard.get();

    dispatch(addCardFromHome({ ...cardInfo.data(), id: newCard.id }));
  };
};

export const startSaveCardFromHome = (id, card) => {
  return async (dispatch) => {
    await db.doc(`pantallas/home/tarjetas/${id}`).set(card);
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
