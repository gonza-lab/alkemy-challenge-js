import React from 'react';
import './Button.scss';

export const UiButton = ({ children, white, ...props }) => {
  return (
    <button
      className={'ui-button' + (white ? ' ui-button__theme-white' : '')}
      {...props}
    >
      {children}
    </button>
  );
};
