import React, { createContext, useContext, useState, useCallback } from 'react';
import type { WorkbookEntry } from '../types';

interface WorkbookContextValue {
  entries: WorkbookEntry[];
  saveEntry: (entry: WorkbookEntry) => void;
  getEntry: (caseId: string) => WorkbookEntry | undefined;
}

const WorkbookContext = createContext<WorkbookContextValue | undefined>(undefined);

export const WorkbookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [entries, setEntries] = useState<WorkbookEntry[]>(() => {
    try {
      const stored = localStorage.getItem('orfheuss-workbook');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const saveEntry = useCallback((entry: WorkbookEntry) => {
    setEntries(prev => {
      const updated = prev.filter(e => e.caseId !== entry.caseId).concat(entry);
      localStorage.setItem('orfheuss-workbook', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const getEntry = useCallback(
    (caseId: string) => entries.find(e => e.caseId === caseId),
    [entries]
  );

  return (
    <WorkbookContext.Provider value={{ entries, saveEntry, getEntry }}>
      {children}
    </WorkbookContext.Provider>
  );
};

export const useWorkbook = () => {
  const ctx = useContext(WorkbookContext);
  if (!ctx) throw new Error('useWorkbook must be used within WorkbookProvider');
  return ctx;
};
