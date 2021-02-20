import types from '../types';
const initialState = {
  isLogging: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UI_TOGGLE_LOGGING:
      return { ...state, isLogging: !state.isLogging };

    default:
      return state;
  }
};
