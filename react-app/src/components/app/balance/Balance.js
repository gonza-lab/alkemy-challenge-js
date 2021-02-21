import React from 'react';
import { useSelector } from 'react-redux';
import { AppCard } from '../card/Card';
import './Balance.scss';

export const AppBalance = () => {
  const { balance } = useSelector((state) => state.operation);
  return (
    <AppCard className="app-balance">
      <div className="app-balance__info">
        <div>Dinero disponible: </div>
        <span>$ {balance}</span>
      </div>
      <div className="app-balance__actions">
        <button>Añadir dinero</button>
        <button>Retirar dinero</button>
      </div>
    </AppCard>
  );
};
