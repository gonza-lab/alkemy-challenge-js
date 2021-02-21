import types from '../types';

const initialState = {
  isLogged: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN:
      return { ...state, ...payload, isLogged: true };

    case types.USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
};
