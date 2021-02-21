import React from 'react';
import { useDispatch } from 'react-redux';
import user from '../../../redux/user/actions';
import './Header.scss';

export const AppHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(user.logout());
  };

  return (
    <header className="app-header">
      <button onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </header>
  );
};
