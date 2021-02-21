import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteConditional } from '../components/route/Conditional';
import { ScreensAppRoot } from './app/Root';
import { ScreensAuthRoot } from './auth/Root';
import useRenew from '../hooks/useRenew';
import './Root.scss';

export const Root = () => {
  const { isLogged } = useSelector((state) => state.user);
  useRenew();

  return (
    <Router>
      <main className="screens-root">
        <Switch>
          <RouteConditional
            exact
            conditionToOpen={isLogged}
            component={ScreensAppRoot}
            path="/"
            pathRedirect="/auth/login"
          />
          <RouteConditional
            conditionToOpen={!isLogged}
            component={ScreensAuthRoot}
            path="/auth"
            pathRedirect="/"
          />
        </Switch>
      </main>
    </Router>
  );
};
