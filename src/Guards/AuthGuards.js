/* eslint-disable import/no-cycle */

import React, { useEffect, useState } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { useStore } from '../store/context-store';
import { getRouteByName } from '../App.routes';

const AuthGuard = ({ children, rObj }) => {
  const [Store, StoreDispatch] = useStore();
  const outlet = useOutlet();
  const [isValid, setValid] = useState(true);
  useEffect(() => {
    if (!Store?.user?.token) {
      StoreDispatch({ type: 'RemoveState' });
      setValid(false);
    }
  }, [Store?.user?.setupFinished, Store?.user?.token, StoreDispatch]);

  return isValid ? (
    <>{outlet}</>
  ) : (
    <Navigate
      state={{ redirectToUrl: window.location.href }}
      to={getRouteByName('Login').route}
    />
  );
};

export default AuthGuard;
