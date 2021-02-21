import types from '../types';

const initialState = {
  balance: 0,
  list: [],
  categories: [],
  mode: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.OPERATION_LOAD_BALANCE:
      return { ...state, balance: payload };

    case types.OPERATION_LOAD_OPERATIONS:
      return { ...state, list: payload };

    case types.OPERATION_LOAD_CATEGORIES:
      return { ...state, categories: payload };

    case types.OPERATION_CHANGE_MODE_ADD:
      return { ...state, mode: 'add' };

    case types.OPERATION_CHANGE_MODE_SUBTRACT:
      return { ...state, mode: 'sub' };

    case types.OPERATION_CHANGE_MODE_OFF:
      return { ...state, mode: '' };

    default:
      return state;
  }
};
