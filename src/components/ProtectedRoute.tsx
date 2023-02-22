import AuthContext from '@/context/AuthContext';
import React, { ReactNode, useContext } from 'react';
import Redirect from './Redirect';

interface PropsInterface {
  children?: ReactNode;
}

export default function ProtectedRoute(props: PropsInterface) {
  const { children } = props;
  const { authContext: isLoggedIn } = useContext(AuthContext);

  return <>{isLoggedIn ? children : <Redirect />}</>;
}
