import { createContext, useState, useContext } from "react";
import { User } from "../interfaces";
interface UserVal {
  email: string;
  rented?: number[];
}

const initialUser: UserVal = {
  email: "",
};

interface UserContextInterface {
  user: UserVal | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserVal>> | undefined;
}

const userContextProvider = createContext<UserContextInterface>({
  user: undefined,
  setUser: undefined,
});

interface Props {
  children?: React.ReactNode;
}

const UserContext = ({ children }: Props) => {
  const [user, setUser] = useState(initialUser);
  return (
    <userContextProvider.Provider value={{ user, setUser: setUser }}>
      {children}
    </userContextProvider.Provider>
  );
};

export const useUserContext = (): [
  UserVal | undefined,
  React.Dispatch<React.SetStateAction<UserVal>> | undefined
] => {
  const { user, setUser } = useContext(userContextProvider);
  return [user, setUser];
};

export default UserContext;
