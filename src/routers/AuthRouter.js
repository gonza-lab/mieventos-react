import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { firebase } from '../firebase/firebase-config';

import { login } from '../actions/auth';
import { finishGetUser, startGetUser } from '../actions/ui';

// import { Loader } from '../components/loader/Loader';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/auth/LoginScreen';
import { AdminScreen } from '../screens/admin/main/Screen';

export const AuthRouter = () => {
  const { auth/* , ui */ } = useSelector((state) => state);

  const { logged } = auth;
  // const { isGetting } = ui;

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(startGetUser());

      if (user) {
        dispatch(login(user.uid));
      }

      dispatch(finishGetUser());
    });
  }, [dispatch]);

  /* return isGetting ? (
    <Loader size={30} />
  ) : */ return (
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
