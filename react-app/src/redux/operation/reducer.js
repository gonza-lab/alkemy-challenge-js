import types from '../types';

const initialState = {
  balance: 0,
  list: [],
  categories: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.OPERATION_LOAD_BALANCE:
      return { ...state, balance: payload };

    case types.OPERATION_LOAD_OPERATIONS:
      return { ...state, list: payload };

    case types.OPERATION_LOAD_CATEGORIES:
      return { ...state, categories: payload };

    default:
      return state;
  }
};
