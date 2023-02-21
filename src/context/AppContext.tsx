import { createContext } from 'react';
import { User } from 'firebase/auth';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface AppContextInterface {
  authContext: boolean;
  setAuthContext: Dispatch<SetStateAction<boolean>>;
  userContext: User;
  setUserContext: Dispatch<SetStateAction<User>>;
}

const AppContext = createContext({} as AppContextInterface);

export default AppContext;
