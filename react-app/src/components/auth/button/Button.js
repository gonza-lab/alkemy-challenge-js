import React from 'react';
import './Button.scss';

export const AuthButton = ({ children, white, ...props }) => {
  return (
    <button
      className={'auth-button' + (white ? ' auth-button__theme-white' : '')}
      {...props}
    >
      {children}
    </button>
  );
};
