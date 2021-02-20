import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ui from '../redux/ui/actions';
import user from '../redux/user/actions';
import axios from 'axios';

const useRenew = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(ui.toggleLogging());
      try {
        const { data } = await axios.get('/api/user/renew', {
          headers: { 'x-token': localStorage.getItem('token') },
        });

        localStorage.setItem('token', data.jwt);
        dispatch(user.login(data));
      } catch (error) {}
      dispatch(ui.toggleLogging());
    })();
  }, []);
};

export default useRenew;
