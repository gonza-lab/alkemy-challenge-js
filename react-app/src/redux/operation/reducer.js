import types from '../types';

const initialState = {
  balance: 0,
  list: [],
  categories: [],
  mode: '',
  activeOperation: null,
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

    case types.OPERATION_CHANGE_MODE_UP:
      return { ...state, mode: 'up', activeOperation: payload };

    case types.OPERATION_CHANGE_MODE_OFF:
      return { ...state, mode: '', activeOperation: null };

    case types.OPERATION_MAKE_OPERATION:
      return {
        ...state,
        list: [...state.list, payload],
        balance:
          state.balance === null
            ? payload.amount
            : state.balance + payload.amount,
      };

    case types.OPERATION_REMOVE_OPERATION:
      return {
        ...state,
        list: state.list.reduce(
          (acum, operation) =>
            operation.id === payload.id ? acum : [...acum, operation],
          []
        ),
        balance: state.balance - payload.amount,
      };

    case types.OPERATION_UPDATE_OPERATION:
      let prevAmount = state.list.find(
        (operation) => operation.id === payload.id
      ).amount;
      console.log(payload);
      return {
        ...state,
        list: state.list.reduce(
          (acum, operation) =>
            operation.id === payload.id
              ? [...acum, { ...operation, ...payload }]
              : [...acum, operation],
          []
        ),
        balance: state.balance - prevAmount + payload.amount,
      };

    default:
      return state;
  }
};
