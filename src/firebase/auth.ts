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
      setUserContext(user);
      setAuthContext(true);
    })
    .catch((error) => {
      setUserContext({} as User);
      setAuthContext(false);
    });
};

export const handleAuthStateChange = (
  setAuthContext: React.Dispatch<React.SetStateAction<User>>
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthContext(user);
    } else {
      setAuthContext({} as User);
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
