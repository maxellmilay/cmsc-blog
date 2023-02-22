import { createContext } from 'react';
import { User } from 'firebase/auth';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

interface UserContextInterface {
  userContext: User;
  setUserContext: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext({} as UserContextInterface);

export default UserContext;
