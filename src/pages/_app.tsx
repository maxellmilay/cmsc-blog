import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect, useMemo } from 'react';
import UserContext from '@/context/UserContext';
import AuthContext from '@/context/AuthContext';
import { User } from 'firebase/auth';
import { handleAuthStateChange } from '@/firebase/auth';

export default function App({ Component, pageProps }: AppProps) {
  const [userContext, setUserContext] = useState({} as User);
  const [authContext, setAuthContext] = useState(false);

  const authContextProviderValue = useMemo(
    () => ({
      authContext,
      setAuthContext,
    }),
    [authContext, setAuthContext]
  );

  const userContextProviderValue = useMemo(
    () => ({
      userContext,
      setUserContext,
    }),
    [userContext, setUserContext]
  );

  useEffect(() => {
    handleAuthStateChange(setUserContext);
  }, []);

  return (
    <AuthContext.Provider value={authContextProviderValue}>
      <UserContext.Provider value={userContextProviderValue}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

