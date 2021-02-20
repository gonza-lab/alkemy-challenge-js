import types from '../types';

const toggleLogging = () => ({
  type: types.UI_TOGGLE_LOGGING,
});

const toggleRegistering = () => ({
  type: types.UI_TOGGLE_REGISTERING,
});

export default { toggleLogging, toggleRegistering };
