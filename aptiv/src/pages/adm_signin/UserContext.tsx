import { createContext, useContext, useState, ReactNode } from 'react';

interface IUser {
  _id: string;
  mat: number;
  kpi: string;
  admin: string;
  unidade: string;
}

interface IUserContextProps {
  user: IUser | null;
  setUserContext: (userData: IUser | null) => void;
}

const UserContext = createContext<IUserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const setUserContext = (userData: IUser | null) => {
    setUser(userData);
  };

  return <UserContext.Provider value={{ user, setUserContext }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
