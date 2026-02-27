import React from 'react';
import { useUser } from '../context/UserContext';
import type { Role, Level } from '../types';

const ROLES: { value: Role; label: string }[] = [
  { value: 'student', label: 'Student' },
  { value: 'docent', label: 'Docent' },
  { value: 'begeleider', label: 'Begeleider' },
];

const LEVELS: { value: Level; label: string }[] = [
  { value: 'mbo4', label: 'MBO4' },
  { value: 'hbo', label: 'HBO' },
  { value: 'universiteit', label: 'Universiteit' },
];

export const RoleLevelSelector: React.FC = () => {
  const { role, level, setRole, setLevel } = useUser();

  return (
    <div className="role-level-selector">
      <div className="selector-group">
        <span className="selector-label">Ik ben:</span>
        <div className="selector-buttons">
          {ROLES.map(r => (
            <button
              key={r.value}
              onClick={() => setRole(r.value)}
              className={`selector-btn ${r.value === role ? 'active' : ''}`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="selector-group">
        <span className="selector-label">Niveau:</span>
        <div className="selector-buttons">
          {LEVELS.map(l => (
            <button
              key={l.value}
              onClick={() => setLevel(l.value)}
              className={`selector-btn ${l.value === level ? 'active' : ''}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
