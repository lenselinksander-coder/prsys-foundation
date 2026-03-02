import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WORKBOOKS } from '../data/workbooks';
import { CASE_LESSONS } from '../data/lessons';
import { useUser } from '../context/UserContext';
import { DOMAIN_META } from '../components/DomainSection';
import type { Level, Workbook, WorkbookEntry } from '../types';

const LEVEL_ORDER: Level[] = ['mbo4', 'hbo', 'universiteit'];
const LEVEL_LABELS: Record<Level, string> = {
  mbo4: 'MBO',
  hbo: 'HBO',
  universiteit: 'Universiteit',
};

function readScopedEntries(workbookId: string): WorkbookEntry[] {
  try {
    const stored = localStorage.getItem(`orfheuss-workbook-${workbookId}`);
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
}

function WorkbookCard({ wb, navigate }: { wb: Workbook; navigate: (path: string) => void }) {
  const entries = readScopedEntries(wb.id);
  const totalCases = CASE_LESSONS.filter(l => l.workbookId === wb.id).length;
  const completedCases = entries.length;
  const domainMeta = DOMAIN_META[wb.domain];

  return (
    <article className={`case-card ${completedCases > 0 ? 'case-card--done' : ''}`}>
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
}

export const WorkbookPage: React.FC = () => {
  const { role } = useUser();
  const navigate = useNavigate();

  const allVisible = WORKBOOKS.filter(w => w.roles.includes(role));

  // Student werkboeken (ook zichtbaar voor docenten als lesstof)
  const studentBooks = allVisible.filter(w => w.roles.includes('student'));

  // Docent-exclusief (geen studenten in de rol)
  const docentBooks = allVisible.filter(w => !w.roles.includes('student'));

  const levelGroups = LEVEL_ORDER
    .map(l => ({ level: l, books: studentBooks.filter(w => w.level === l) }))
    .filter(g => g.books.length > 0);

  const hasContent = levelGroups.length > 0 || docentBooks.length > 0;

  return (
    <div className="page-container">
      <div className="workbook-header">
        <h1>Mijn voortgang</h1>
        <p className="workbook-subtitle">
          Voortgang per werkboek, gegroepeerd op niveau en rol.
        </p>
      </div>

      {!hasContent ? (
        <div className="empty-state">
          <p>Geen werkboeken beschikbaar voor jouw huidige rol en niveau.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Ga naar leergangen
          </button>
        </div>
      ) : (
        <>
          {/* ── Werkboeken per niveau ─────────────────────────────────── */}
          {levelGroups.map((group, idx) => (
            <div key={group.level} className="level-group">
              {idx === 0 ? (
                <div className="level-group-header">
                  <span className="level-group-label">{LEVEL_LABELS[group.level]}</span>
                </div>
              ) : (
                <div className="level-group-divider">
                  <span className="level-group-divider-label">{LEVEL_LABELS[group.level]}</span>
                </div>
              )}
              <div className="case-list">
                {group.books.map(wb => (
                  <WorkbookCard key={wb.id} wb={wb} navigate={navigate} />
                ))}
              </div>
            </div>
          ))}

          {/* ── Docentenhandleidingen ─────────────────────────────────── */}
          {docentBooks.length > 0 && (
            <div className="docent-frame">
              <div className="docent-frame-header">
                <span className="docent-frame-icon">◈</span>
                Docentenhandleidingen
              </div>
              <p className="docent-frame-desc">
                Uitsluitend beschikbaar voor docenten en begeleiders.
              </p>
              <div className="case-list">
                {docentBooks.map(wb => (
                  <WorkbookCard key={wb.id} wb={wb} navigate={navigate} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
