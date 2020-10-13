import { types } from '../types/types';

export const homeReducer = (state = { cards: [] }, action) => {
  switch (action.type) {
    case types.homeGetCards:
      return {
        ...state,
        cards: [...action.payload],
      };

    case types.homeAddCard:
      return {
        ...state,
        cards: [action.payload, ...state.cards],
      };

    case types.homeCardAddImage:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, imagenes: [...card.imagenes, action.payload.image] }
            : card
        ),
      };

    case types.homeDeleteCard:
      return {
        ...state,
        cards: state.cards.reduce((ac, current) => {
          if (current.id !== action.payload) {
            return [...ac, current];
          } else {
            return ac;
          }
        }, []),
      };

    default:
      return state;
  }
};
