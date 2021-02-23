import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { AppBalance } from '../../components/app/balance/Balance';
import { AppForm } from '../../components/app/form/Form';
import { AppHeader } from '../../components/app/header/Header';
import { AppOperation } from '../../components/app/operation/Operation';
import operation from '../../redux/operation/actions';
import './Root.scss';

export const ScreensAppRoot = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.operation);

  useEffect(() => {
    dispatch(operation.getData());
  }, []);

  return (
    <section id="balance" className="screens-app">
      <AppHeader />
      <div className="screens-app__container">
        <AppBalance />
        <Fade top collapse when={Boolean(mode)}>
          <AppForm />
        </Fade>
        <AppOperation title="Ingresos" />
        <AppOperation out title="Egresos" />
      </div>
    </section>
  );
};
