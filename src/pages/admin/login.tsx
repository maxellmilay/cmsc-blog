import React, { useContext, useEffect } from 'react';
import { handleSignInWithGoogle } from '../../firebase/auth';
import UserContext from '@/context/UserContext';
import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Login() {
  const { setAuthContext, authContext: isLoggedIn } = useContext(AuthContext);
  const { setUserContext } = useContext(UserContext);
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
    <ProtectedRoute>
      <Head>
        <title>Admin Login</title>
      </Head>
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <h1 className="text-blog-primary text-4xl mb-10 font-product">Admin Login</h1>
        <button className="text-white bg-blog-primary py-3 px-10" onClick={handleLogInClick}>
          SIGN IN WITH GOOGLE
        </button>
      </div>
    </ProtectedRoute>
  );
}
