import { types } from '../types/types';

export const serviciosReducer = (
  state = {
    cards: [],
    presentation: { mensaje: undefined, urlImage: undefined },
  },
  action
) => {
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

    case types.serviciosDeleteCard:
      return {
        ...state,
        cards: state.cards.reduce(
          (acu, curr) => (curr.id === action.payload ? acu : [...acu, curr]),
          []
        ),
      };

    case types.serviciosGetPresentation:
      return {
        ...state,
        presentation: action.payload,
      };

    default:
      return state;
  }
};
