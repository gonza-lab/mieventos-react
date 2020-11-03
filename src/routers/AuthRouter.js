import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { login } from '../actions/auth';
import { finishGetUser, startGetUser } from '../actions/ui';

import { Loader } from '../components/loader/Loader';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/auth/LoginScreen';
import { AdminScreen } from '../screens/admin/main/Screen';
import { fetchWithToken } from '../helpers/fetch';

export const AuthRouter = () => {
  const { auth, ui } = useSelector((state) => state);

  const { logged } = auth;
  const { isGetting } = ui;

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(startGetUser());
      const res = await fetchWithToken('auth/renew', 'GET');
      const user = await res.json();

      if (user.ok) {
        localStorage.setItem('x-token', user.token);
        dispatch(login(user.id));
      }
      dispatch(finishGetUser());
    }

    fetchData();
  }, [dispatch]);

  return isGetting ? (
    <Loader size={30} />
  ) : (
    <Switch>
      <PrivateRoute
        condition={logged}
        path="/admin/dashboard"
        component={AdminScreen}
      />{' '}
      <PublicRoute
        condition={logged}
        path="/admin/login"
        component={LoginScreen}
      />
      <Redirect to="/admin/login" />
    </Switch>
  );
};
