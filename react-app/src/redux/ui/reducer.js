import types from '../types';
const initialState = {
  isLogging: false,
  isRegistering: false,
  isGettingBalance: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UI_TOGGLE_LOGGING:
      return { ...state, isLogging: !state.isLogging };

    case types.UI_TOGGLE_REGISTERING:
      return { ...state, isRegistering: !state.isRegistering };

    case types.UI_TOGGLE_GETTING_BALANCE:
      return { ...state, isGettingBalance: !state.isGettingBalance };

    default:
      return state;
  }
};
