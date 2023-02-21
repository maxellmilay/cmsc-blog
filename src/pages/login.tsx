import React, { useContext, useEffect } from 'react';
import { handleSignInWithGoogle } from '../firebase/auth';
import AppContext from '@/context/AppContext';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Login() {
  const { setAuthContext, authContext: isLoggedIn, setUserContext } = useContext(AppContext);
  const router = useRouter();

  const handleLogInClick = () => {
    handleSignInWithGoogle(setUserContext, setAuthContext);
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <div className="flex w-screen h-screen justify-center items-center">
        <button className="text-white bg-blog-primary py-3 px-10" onClick={handleLogInClick}>
          SIGN IN WITH GOOGLE
        </button>
      </div>
    </>
  );
}
