import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthLogin } from '../../components/auth/login/Login';
import { AuthSignup } from '../../components/auth/signup/Signup';
import useRenew from '../../hooks/useRenew';
import './Root.scss';

export const ScreensAuthRoot = () => {
  useRenew();

  return (
    <div className="screens-auth">
      <Switch>
        <Route path="/auth/login" component={AuthLogin} />
        <Route path="/auth/signup" component={AuthSignup} />
      </Switch>
    </div>
  );
};
