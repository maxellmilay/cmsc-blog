import app from '.';
import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { SetStateAction } from 'react';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const handleSignInWithGoogle = async (
  setUserContext: React.Dispatch<React.SetStateAction<User>>,
  setAuthContext: React.Dispatch<React.SetStateAction<boolean>>
) => {
  await setPersistence(auth, browserSessionPersistence);
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('auth: ', user.email);
      if (user.email !== undefined) {
        setUserContext(user);
      }
      setAuthContext(true);
    })
    .catch((error) => {
      setUserContext({} as User);
      setAuthContext(false);
    });
};

export const handleAuthStateChange = (
  setUserContext: React.Dispatch<React.SetStateAction<User>>,
  setAuthContext: React.Dispatch<SetStateAction<boolean>>
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.email !== undefined) {
        setUserContext(user);
      }
      setAuthContext(true);
    } else {
      setAuthContext(false);
      setUserContext({} as User);
    }
  });
};

export const handleLogOut = () => {
  signOut(auth).catch((error) => {
    const { code, message } = error;
    console.log(code, message);
  });
};

export default auth;
