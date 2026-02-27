import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWorkbook } from '../context/WorkbookContext';
import { CASES } from '../data/cases';
import { CaseDetail } from '../components/CaseDetail';

export const WorkbookPage: React.FC = () => {
  const { entries } = useWorkbook();
  const navigate = useNavigate();
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  if (selectedCaseId) {
    const cas = CASES.find(c => c.id === selectedCaseId);
    if (cas) {
      return (
        <div className="page-container">
          <CaseDetail cas={cas} onBack={() => setSelectedCaseId(null)} />
        </div>
      );
    }
  }

  return (
    <div className="page-container">
      <div className="workbook-header">
        <h1>Mijn Werkboek</h1>
        <p className="workbook-subtitle">
          {entries.length === 0
            ? 'Nog geen cases ingevuld.'
            : `${entries.length} case${entries.length !== 1 ? 's' : ''} ingevuld.`}
        </p>
      </div>

      {entries.length === 0 ? (
        <div className="empty-state">
          <p>Je hebt nog geen ORFHEUSS-cases ingevuld.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Ga naar leergangen
          </button>
        </div>
      ) : (
        <div className="case-list">
          {entries.map(entry => {
            const cas = CASES.find(c => c.id === entry.caseId);
            if (!cas) return null;
            const savedDate = new Date(entry.savedAt).toLocaleDateString('nl-NL');

            return (
              <article key={entry.caseId} className="case-card case-card--done">
                <div className="case-card-body">
                  <div className="case-card-top">
                    <span className="badge badge-done">✓ Ingevuld</span>
                    <span className="saved-date">Opgeslagen op {savedDate}</span>
                  </div>
                  <h3 className="case-card-title">{cas.title}</h3>
                  <p className="case-card-situation excerpt">{entry.reflection}</p>
                </div>
                <div className="case-card-footer">
                  <button
                    className="btn btn-ghost"
                    onClick={() => setSelectedCaseId(entry.caseId)}
                  >
                    Bekijk / bewerk
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
