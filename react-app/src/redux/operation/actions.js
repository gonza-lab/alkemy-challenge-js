import axios from 'axios';
import getHeaderToken from '../../helper/getHeaderToken';
import types from '../types';
import ui from '../ui/actions';

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

export default { getData };
