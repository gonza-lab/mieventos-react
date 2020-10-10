import { types } from '../types/types';

export const authReducer = (state = { logged: false }, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        logged: true,
      };

    default:
      return state;
  }
};
