import types from '../types';
const initialState = {
  isLogging: false,
  isRegistering: false,
  isGettingBalance: false,
  isAddingOperation: false,
  isRemovingOperation: false,
  isUpdatingOperation: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UI_TOGGLE_LOGGING:
      return { ...state, isLogging: !state.isLogging };

    case types.UI_TOGGLE_REGISTERING:
      return { ...state, isRegistering: !state.isRegistering };

    case types.UI_TOGGLE_GETTING_BALANCE:
      return { ...state, isGettingBalance: !state.isGettingBalance };

    case types.UI_TOGGLE_ADDING_OPERATION:
      return { ...state, isAddingOperation: !state.isAddingOperation };

    case types.UI_TOGGLE_REMOVING_OPERATION:
      return { ...state, isRemovingOperation: !state.isRemovingOperation };

    case types.UI_TOGGLE_UPDATING_OPERATION:
      return { ...state, isUpdatingOperation: !state.isUpdatingOperation };

    default:
      return state;
  }
};
