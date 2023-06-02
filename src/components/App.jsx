import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperetion';
import { SharedLayout } from './SharedLatout/SharedLayout';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRouete } from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const refreshing = useSelector(selectIsRefreshing);

  return (
    !refreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRouete component={Contacts} redirectTo="/login" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      </>
    )
  );
};
