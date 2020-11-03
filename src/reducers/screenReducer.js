import { types } from '../types/types';

export const screenReducer = (state = {}, action) => {
  let screen, newCard;

  if (action.payload) {
    ({ screenName: screen, ...newCard } = action.payload);
  }

  switch (action.type) {
    case types.screenGetScreens:
      return {
        ...state,
        ...action.payload.reduce((acu, current) => {
          acu[current.name.toLowerCase()] = current;
          return acu;
        }, {}),
      };

    case types.screenAddCard:
      return {
        ...state,
        [screen]: {
          ...state[screen],
          cards: [...state[screen].cards, { ...newCard }],
        },
      };

    case types.screenSaveCard:
      return {
        ...state,
        [screen]: {
          ...state[screen],
          cards: state[screen].cards.map((card) =>
            card._id === newCard._id ? newCard : card
          ),
        },
      };

    default:
      return state;
  }
};
