import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBalance } from '../../components/app/balance/Balance';
import { AppHeader } from '../../components/app/header/Header';
import { AppOperation } from '../../components/app/operation/Operation';
import operation from '../../redux/operation/actions';
import './Root.scss';

export const ScreensAppRoot = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.getData());
  });

  return (
    <section id="balance" className="screens-app">
      <AppHeader />
      <div className="screens-app__container">
        <AppBalance />
        <AppOperation title="Ingresos" />
        <AppOperation out title="Egresos" />
      </div>
    </section>
  );
};
