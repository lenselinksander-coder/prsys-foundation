import React, { createContext, useContext, useState } from 'react';
import type { Role, Level } from '../types';

const ROLES: Role[] = ['student', 'docent', 'begeleider'];
const LEVELS: Level[] = ['mbo4', 'hbo', 'universiteit'];

function loadStored<T>(key: string, fallback: T, valid: T[]): T {
  try {
    const v = localStorage.getItem(key) as T;
    return valid.includes(v) ? v : fallback;
  } catch { return fallback; }
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

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<Role>(() => loadStored('orfheuss-role', 'student', ROLES));
  const [level, setLevelState] = useState<Level>(() => loadStored('orfheuss-level', 'hbo', LEVELS));

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
