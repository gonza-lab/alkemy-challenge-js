import types from '../types';

const initialState = {
  isLogged: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN:
      return { ...state, ...payload, isLogged: true };

    default:
      return state;
  }
};
