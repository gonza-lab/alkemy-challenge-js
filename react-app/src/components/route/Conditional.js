import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const RouteConditional = ({
  conditionToOpen: condition,
  component: Component,
  pathRedirect,
  ...propsRoute
}) => {
  return (
    <Route
      {...propsRoute}
      render={(props) =>
        condition ? <Component {...props} /> : <Redirect to={pathRedirect} />
      }
    />
  );
};