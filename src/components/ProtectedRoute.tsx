import AuthContext from '@/context/AuthContext';
import UserContext from '@/context/UserContext';
import React, { ReactNode, useContext, useState } from 'react';
import Redirect from './Redirect';

interface PropsInterface {
  children?: ReactNode;
}

const adminUsers = [
  { name: 'Maxell Milay', email: 'milaymaxell@gmail.com' },
  { name: 'Jed Edison Donaire', email: 'jed.donaire08@gmail.com' },
  { name: 'Levi Bacarra', email: 'bacarradanelevi@gmail.com' },
];

export default function ProtectedRoute(props: PropsInterface) {
  const { children } = props;
  const [isAdmin, setIsAdmin] = useState(false);
  const { authContext: isLoggedIn } = useContext(AuthContext);
  const { userContext } = useContext(UserContext);

  const updateAdminState = () => {
    setIsAdmin(true);
  };

  adminUsers.forEach((user) => {
    console.log('admin: ', isAdmin, '  login: ', isLoggedIn);
    if (user.email == userContext.email && isAdmin === false) {
      updateAdminState();
    }
  });

  return <>{isLoggedIn && isAdmin ? children : <Redirect />}</>;
}
