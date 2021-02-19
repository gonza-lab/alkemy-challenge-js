import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ScreensAuthRoot } from './auth/Root';
import './Root.scss';

export const Root = () => {
  return (
    <Router>
      <div className="screens-root">
        <Switch>
          <Route path="/auth" component={ScreensAuthRoot} />
        </Switch>
      </div>
    </Router>
  );
};
