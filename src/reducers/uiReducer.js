import { types } from '../types/types';

export const uiReducer = (
  state = { isLoading: false, isGetting: true },
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

    default:
      return state;
  }
};
