import React, { createContext, useContext, useState, useCallback } from 'react';
import type { WorkbookEntry, EthicsEntry } from '../types';

interface WorkbookContextValue {
  entries: WorkbookEntry[];
  saveEntry: (entry: WorkbookEntry) => void;
  getEntry: (caseId: string) => WorkbookEntry | undefined;
  ethicsEntries: EthicsEntry[];
  saveEthicsEntry: (entry: EthicsEntry) => void;
  getEthicsEntry: (lessonId: string) => EthicsEntry | undefined;
}

const WorkbookContext = createContext<WorkbookContextValue | undefined>(undefined);

export const WorkbookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [entries, setEntries] = useState<WorkbookEntry[]>(() => {
    try {
      const stored = localStorage.getItem('orfheuss-workbook');
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  const [ethicsEntries, setEthicsEntries] = useState<EthicsEntry[]>(() => {
    try {
      const stored = localStorage.getItem('orfheuss-ethics');
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
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

  const saveEthicsEntry = useCallback((entry: EthicsEntry) => {
    setEthicsEntries(prev => {
      const updated = prev.filter(e => e.lessonId !== entry.lessonId).concat(entry);
      localStorage.setItem('orfheuss-ethics', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const getEthicsEntry = useCallback(
    (lessonId: string) => ethicsEntries.find(e => e.lessonId === lessonId),
    [ethicsEntries]
  );

  return (
    <WorkbookContext.Provider value={{ entries, saveEntry, getEntry, ethicsEntries, saveEthicsEntry, getEthicsEntry }}>
      {children}
    </WorkbookContext.Provider>
  );
};

export const useWorkbook = () => {
  const ctx = useContext(WorkbookContext);
  if (!ctx) throw new Error('useWorkbook must be used within WorkbookProvider');
  return ctx;
};
