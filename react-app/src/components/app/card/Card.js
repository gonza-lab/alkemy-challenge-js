import React from 'react';
import './Card.scss';

export const AppCard = ({ children, className }) => {
  return (
    <div className={'app-card' + (className ? ' ' + className : '')}>
      {children}
    </div>
  );
};
