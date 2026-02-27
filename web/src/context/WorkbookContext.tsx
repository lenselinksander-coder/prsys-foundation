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

interface WorkbookProviderProps {
  children: React.ReactNode;
  /** Optionele scope (werkboek-ID) voor geïsoleerde opslag per lesprogramma. */
  scope?: string;
}

export const WorkbookProvider: React.FC<WorkbookProviderProps> = ({ children, scope }) => {
  const storageKey = scope ? `orfheuss-workbook-${scope}` : 'orfheuss-workbook';
  const ethicsStorageKey = scope ? `orfheuss-ethics-${scope}` : 'orfheuss-ethics';

  const [entries, setEntries] = useState<WorkbookEntry[]>(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  const [ethicsEntries, setEthicsEntries] = useState<EthicsEntry[]>(() => {
    try {
      const stored = localStorage.getItem(ethicsStorageKey);
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  const saveEntry = useCallback((entry: WorkbookEntry) => {
    setEntries(prev => {
      const updated = prev.filter(e => e.caseId !== entry.caseId).concat(entry);
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  }, [storageKey]);

  const getEntry = useCallback(
    (caseId: string) => entries.find(e => e.caseId === caseId),
    [entries]
  );

  const saveEthicsEntry = useCallback((entry: EthicsEntry) => {
    setEthicsEntries(prev => {
      const updated = prev.filter(e => e.lessonId !== entry.lessonId).concat(entry);
      localStorage.setItem(ethicsStorageKey, JSON.stringify(updated));
      return updated;
    });
  }, [ethicsStorageKey]);

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
