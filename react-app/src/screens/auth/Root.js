import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthLogin } from '../../components/auth/login/Login';
import { AuthSignup } from '../../components/auth/signup/Signup';
import './Root.scss';

export const ScreensAuthRoot = () => {
  return (
    <div className="screens-auth">
      <Switch>
        <Route path="/auth/login" component={AuthLogin} />
        <Route path="/auth/signup" component={AuthSignup} />
      </Switch>
    </div>
  );
};
