import { createContext } from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface AuthContextInterface {
  authContext: boolean;
  setAuthContext: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext({} as AuthContextInterface);

export default AuthContext;
