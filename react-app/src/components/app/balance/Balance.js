import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operation from '../../../redux/operation/actions';
import { AppCard } from '../card/Card';
import './Balance.scss';

export const AppBalance = () => {
  const { balance } = useSelector((state) => state.operation);
  const dispatch = useDispatch();

  return (
    <div className="app-balance__container">
      <AppCard className="app-balance">
        <div
          className={
            'app-balance__info' +
            (balance === null ? ' app-balance__info-empty' : '')
          }
        >
          <div>Dinero disponible: </div>
          <span>
            {balance === null
              ? 'Al parecer no hay transacciones'
              : `$ ${balance}`}
          </span>
        </div>
        <div className="app-balance__actions">
          <button onClick={() => dispatch(operation.changeModeAdd())}>
            Añadir dinero
          </button>
          <button onClick={() => dispatch(operation.changeModeSub())}>
            Retirar dinero
          </button>
        </div>
      </AppCard>
    </div>
  );
};
