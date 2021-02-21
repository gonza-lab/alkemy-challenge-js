import types from '../types';

const toggleLogging = () => ({
  type: types.UI_TOGGLE_LOGGING,
});

const toggleRegistering = () => ({
  type: types.UI_TOGGLE_REGISTERING,
});

const toggleGetBalance = () => ({
  type: types.UI_TOGGLE_GETTING_BALANCE,
});

export default { toggleLogging, toggleRegistering, toggleGetBalance };
