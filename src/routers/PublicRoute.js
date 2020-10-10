import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({
  condition,
  component: Component,
  ...propsRoute
}) => {
  return (
    <Route
      {...propsRoute}
      render={(props) =>
        condition ? <Redirect to="/admin/dashboard" /> : <Component {...props} />
      }
    />
  );
};
