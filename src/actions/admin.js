import { types } from '../types/types';

export const setActiveCard = (card) => ({
  type: types.adminSetActiveCard,
  payload: card,
});

export const clearActiveCard = () => ({
  type: types.adminSetActiveCard,
});
