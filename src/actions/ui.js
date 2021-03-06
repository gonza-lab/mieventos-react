import { types } from '../types/types';

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});

export const startGetUser = () => ({
  type: types.uiStartGetUser,
});

export const finishGetUser = () => ({
  type: types.uiFinishGetUser,
});

export const openModalAdmin = () => ({
  type: types.uiOpenModalAdmin,
});

export const closeModalAdmin = () => ({
  type: types.uiCloseModalAdmin,
});
