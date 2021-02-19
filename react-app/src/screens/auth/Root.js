import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthLogin } from '../../components/auth/login/Login';
import './Root.scss';

export const ScreensAuthRoot = () => {
  return (
    <div className="screens-auth">
      <Switch>
        <Route path="/auth/login" component={AuthLogin} />
        <Route path="/auth/signup" component={() => <div>Registro</div>} />
      </Switch>
    </div>
  );
};
