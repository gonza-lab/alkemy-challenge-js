import axios from 'axios';
import getHeaderToken from '../../helper/getHeaderToken';
import types from '../types';
import ui from '../ui/actions';
import { UiToast } from '../../components/ui/toast/Toasj';

const loadBalance = (payload) => ({
  type: types.OPERATION_LOAD_BALANCE,
  payload,
});

const loadOperation = (payload) => ({
  type: types.OPERATION_LOAD_OPERATIONS,
  payload,
});

const loadCategories = (payload) => ({
  type: types.OPERATION_LOAD_CATEGORIES,
  payload,
});

const changeModeAdd = () => ({
  type: types.OPERATION_CHANGE_MODE_ADD,
});

const changeModeSub = () => ({
  type: types.OPERATION_CHANGE_MODE_SUBTRACT,
});

const changeModeOff = () => ({
  type: types.OPERATION_CHANGE_MODE_OFF,
});

const changeModeUp = (payload) => ({
  type: types.OPERATION_CHANGE_MODE_UP,
  payload,
});

const makeOperation = (payload) => ({
  type: types.OPERATION_MAKE_OPERATION,
  payload,
});

const removeOperation = (payload) => ({
  type: types.OPERATION_REMOVE_OPERATION,
  payload,
});

const updateOperation = (payload) => ({
  type: types.OPERATION_UPDATE_OPERATION,
  payload,
});

const getData = () => {
  return async (dispatch) => {
    dispatch(ui.toggleGetBalance());
    const options = {
      headers: getHeaderToken(),
    };

    try {
      const { data: dataBalance } = await axios.get(
        '/api/operation/balance',
        options
      );
      dispatch(loadBalance(dataBalance.balance));

      const { data: dataOperations } = await axios.get(
        '/api/operation',
        options
      );
      dispatch(loadOperation(dataOperations));

      const { data: dataCategories } = await axios.get('/api/category');
      dispatch(loadCategories(dataCategories.categories));
    } catch (error) {}
    dispatch(ui.toggleGetBalance());
  };
};

const startMakeOperation = ({ amount, categoryId, ...restOperation }) => {
  return async (dispatch, getState) => {
    const { operation } = getState();
    const options = {
      headers: getHeaderToken(),
    };

    let newOperation = {};
    if (categoryId) newOperation = { categoryId };
    newOperation = {
      ...newOperation,
      ...restOperation,
      amount: operation.mode === 'add' ? +amount : +amount * -1,
    };

    dispatch(ui.toggleAddingOperation());
    try {
      const { data } = await axios.post(
        '/api/operation',
        newOperation,
        options
      );
      dispatch(makeOperation(data));
    } catch (error) {
      console.log(error);
    }
    dispatch(changeModeOff());
    dispatch(ui.toggleAddingOperation());
  };
};

const startDeleteOperation = ({ id, amount }) => {
  return async (dispatch) => {
    const options = {
      headers: getHeaderToken(),
    };
    console.log(amount);

    dispatch(ui.toggleRemovingOperation());
    try {
      await axios.delete(`/api/operation/${id}`, options);
      dispatch(removeOperation({ id, amount }));
    } catch (error) {
      console.log(error);
    }
    dispatch(ui.toggleRemovingOperation());
  };
};

const startUpdateOperation = ({ id, ...newOperation }) => {
  return async (dispatch) => {
    const options = {
      headers: getHeaderToken(),
    };

    dispatch(ui.toggleUpdatingOperation());
    try {
      const { data } = await axios.put(
        `/api/operation/${id}`,
        newOperation,
        options
      );
      const { ok, ...operationUpdated } = data;

      dispatch(updateOperation({ ...operationUpdated, id }));
    } catch ({ response }) {
      console.log(response);
      if (response.status === 400) {
        UiToast.fire('El monto no debe ser 0.', '', 'error');
      }
    }
    dispatch(changeModeOff());
    dispatch(ui.toggleUpdatingOperation());
  };
};

export default {
  getData,
  changeModeAdd,
  changeModeSub,
  changeModeUp,
  changeModeOff,
  startMakeOperation,
  startDeleteOperation,
  startUpdateOperation,
};
