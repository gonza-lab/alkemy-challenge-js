import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteConditional } from '../components/route/Conditional';
import { ScreensAuthRoot } from './auth/Root';
import './Root.scss';

export const Root = () => {
  const { isLogged } = useSelector((state) => state.user);

  return (
    <Router>
      <div className="screens-root">
        <Switch>
          <RouteConditional
            exact
            conditionToOpen={isLogged}
            component={() => <div>Pantalla principal</div>}
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
      </div>
    </Router>
  );
};
