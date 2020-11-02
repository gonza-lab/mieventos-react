import { types } from '../types/types';

export const uiReducer = (
  state = { isLoading: false, isGetting: true, isOpenModalAdmin: false },
  action
) => {
  switch (action.type) {
    case types.uiFinishLoading:
      return {
        ...state,
        isLoading: false,
      };

    case types.uiStartLoading:
      return {
        ...state,
        isLoading: true,
      };

    case types.uiStartGetUser:
      return {
        ...state,
        isGetting: true,
      };

    case types.uiFinishGetUser:
      return {
        ...state,
        isGetting: false,
      };

    case types.uiCloseModalAdmin:
      return {
        ...state,
        isOpenModalAdmin: false,
      };

    case types.uiOpenModalAdmin:
      return {
        ...state,
        isOpenModalAdmin: true,
      };

    default:
      return state;
  }
};
