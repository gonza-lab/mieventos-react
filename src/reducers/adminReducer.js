import { types } from '../types/types';

export const adminReducer = (
  state = { activeCard: null, mode: 'Add' },
  action
) => {
  switch (action.type) {
    case types.adminSetActiveCard:
      return {
        ...state,
        activeCard: action.payload,
      };

    case types.adminSetMode:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};
