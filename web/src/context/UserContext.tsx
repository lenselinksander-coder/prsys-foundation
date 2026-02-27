import React, { createContext, useContext, useState } from 'react';
import type { Role, Level } from '../types';

interface UserContextValue {
  role: Role;
  level: Level;
  setRole: (r: Role) => void;
  setLevel: (l: Level) => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>('student');
  const [level, setLevel] = useState<Level>('hbo');

  return (
    <UserContext.Provider value={{ role, level, setRole, setLevel }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
};
