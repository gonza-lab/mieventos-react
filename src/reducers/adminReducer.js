import { types } from '../types/types';

export const adminReducer = (state = { activeNote: null }, action) => {
  switch (action.type) {
    case types.adminSetActiveCard:
      return {
        ...state,
        activeNote: action.payload,
      };

    case types.adminClearActiveCard:
      return {
        ...state,
        activeNote: null,
      };

    default:
      return state;
  }
};
