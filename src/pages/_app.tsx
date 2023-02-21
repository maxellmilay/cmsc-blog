import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import AppContext from '@/context/AppContext';
import { User } from 'firebase/auth';
import { handleAuthStateChange } from '@/firebase/auth';

export default function App({ Component, pageProps }: AppProps) {
  const [userContext, setUserContext] = useState({} as User);
  const [authContext, setAuthContext] = useState(false);

  useEffect(() => {
    handleAuthStateChange(setUserContext);
  }, []);

  return (
    <AppContext.Provider value={{ authContext, setAuthContext, userContext, setUserContext }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

