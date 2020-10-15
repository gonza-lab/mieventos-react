import { types } from '../types/types';

export const serviciosReducer = (state = { cards: [] }, action) => {
  switch (action.type) {
    case types.serviciosGetCards:
      return {
        ...state,
        cards: action.payload,
      };

    case types.serviciosAddCard:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    default:
      return state;
  }
};
