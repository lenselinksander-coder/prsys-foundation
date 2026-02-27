import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WORKBOOKS } from '../data/workbooks';
import { CASE_LESSONS } from '../data/lessons';
import { useUser } from '../context/UserContext';
import { DOMAIN_META } from '../components/DomainSection';
import type { WorkbookEntry } from '../types';

function readScopedEntries(workbookId: string): WorkbookEntry[] {
  try {
    const stored = localStorage.getItem(`orfheuss-workbook-${workbookId}`);
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
}

export const WorkbookPage: React.FC = () => {
  const { role, level } = useUser();
  const navigate = useNavigate();

  const visibleWorkbooks = WORKBOOKS.filter(
    w => w.level === level && w.roles.includes(role)
  );

  return (
    <div className="page-container">
      <div className="workbook-header">
        <h1>Mijn voortgang</h1>
        <p className="workbook-subtitle">
          Voortgang per werkboek, gefilterd op jouw niveau en rol.
        </p>
      </div>

      {visibleWorkbooks.length === 0 ? (
        <div className="empty-state">
          <p>Geen werkboeken beschikbaar voor jouw huidige rol en niveau.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Ga naar leergangen
          </button>
        </div>
      ) : (
        <div className="case-list">
          {visibleWorkbooks.map(wb => {
            const entries = readScopedEntries(wb.id);
            const totalCases = CASE_LESSONS.filter(l => l.workbookId === wb.id).length;
            const completedCases = entries.length;
            const domainMeta = DOMAIN_META[wb.domain];

            return (
              <article key={wb.id} className={`case-card ${completedCases > 0 ? 'case-card--done' : ''}`}>
                <div className="case-card-body">
                  <div className="case-card-top">
                    <span className="badge badge-level">{wb.level.toUpperCase()}</span>
                    <span className="badge badge-domain">
                      {domainMeta?.icon} {domainMeta?.label ?? wb.domain}
                    </span>
                    {completedCases > 0 && (
                      <span className="badge badge-done">
                        ✓ {completedCases}/{totalCases} cases
                      </span>
                    )}
                  </div>
                  <h3 className="case-card-title">{wb.title}</h3>
                  <p className="case-card-situation">
                    {completedCases === 0
                      ? 'Nog geen cases ingevuld.'
                      : completedCases >= totalCases
                        ? 'Alle cases afgerond!'
                        : `Nog ${totalCases - completedCases} case${totalCases - completedCases !== 1 ? 's' : ''} te gaan.`}
                  </p>
                </div>
                <div className="case-card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/werkboek/${wb.id}`)}
                  >
                    {completedCases > 0 ? 'Verdergaan →' : 'Begin →'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
