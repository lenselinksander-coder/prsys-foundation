import React, { createContext, useContext, useState } from 'react';
import type { Role, Level } from '../types';
import { ROLE_VALUES, LEVEL_VALUES } from '../types';

function loadStored<T extends string>(key: string, fallback: T, valid: readonly T[]): T {
  try {
    const v = localStorage.getItem(key);
    if (v !== null && (valid as readonly string[]).includes(v)) return v as T;
  } catch { /* ignore */ }
  return fallback;
}

function persist(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

interface UserContextValue {
  role: Role;
  level: Level;
  setRole: (r: Role) => void;
  setLevel: (l: Level) => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
  initialRole?: string; // from JWT — seeds state, user can still override
  initialLevel?: string; // from JWT — seeds state, user can still override
}

export const UserProvider: React.FC<UserProviderProps> = ({ children, initialRole, initialLevel }) => {
  const [role, setRoleState] = useState<Role>(() => {
    if (initialRole && (ROLE_VALUES as readonly string[]).includes(initialRole)) return initialRole as Role;
    return loadStored('orfheuss-role', 'student', ROLE_VALUES);
  });
  const [level, setLevelState] = useState<Level>(() => {
    if (initialLevel && (LEVEL_VALUES as readonly string[]).includes(initialLevel)) return initialLevel as Level;
    return loadStored('orfheuss-level', 'hbo', LEVEL_VALUES);
  });

  const setRole = (r: Role) => { setRoleState(r); persist('orfheuss-role', r); };
  const setLevel = (l: Level) => { setLevelState(l); persist('orfheuss-level', l); };

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
