import AuthContext from '@/context/AuthContext';
import React, { ReactNode, useContext } from 'react';
import Redirect from './Redirect';

interface PropsInterface {
  children?: ReactNode;
}

export default function ProtectedRoute(props: PropsInterface) {
  const { children } = props;
  const { authContext } = useContext(AuthContext);
  const isLoggedIn = false;

  return <>{isLoggedIn ? children : <Redirect />}</>;
}
