import React, { useState } from 'react';
import type { Domain, Level, Role } from '../types';
import { fetchCompare, fetchClaudius } from '../services/taogateApi';
import type { CompareResult, ClaudiusResult, OrfheussResult } from '../services/taogateApi';

interface Props {
  caseId: string;
  domain: Domain;
  level: Level;
  role: Role;
  situation?: string;
}

function OrfheussPanel({ checks, title, icon }: { checks: OrfheussResult; title: string; icon: string }) {
  return (
    <div className="split-panel split-panel--orfheuss">
      <div className="split-header">
        <span className="split-icon">{icon}</span>
        <span className="split-title">{title}</span>
        <span className={`split-tag ${checks.wouldBlock ? 'split-tag--block' : 'split-tag--pass'}`}>
          {checks.wouldBlock ? 'blokkeert / vertraagt' : 'laat door met vragen'}
        </span>
      </div>
      <div className="split-section">
        <div className="split-label">Verplichte checks</div>
        <ul className="split-list split-list--checks">
          {checks.requiredChecks.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      {checks.wouldBlock && (
        <div className="split-section">
          <div className="split-label">Reden blokkade</div>
          <p className="split-block-reason">{checks.reasonIfBlock}</p>
        </div>
      )}
      {checks.additionalQuestions.length > 0 && (
        <div className="split-section">
          <div className="split-label">Reflectievragen</div>
          <ol className="split-questions">
            {checks.additionalQuestions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export const CaseCompareView: React.FC<Props> = ({ caseId, domain, level, role, situation }) => {
  const [compare, setCompare] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const [claudius, setClaudius] = useState<ClaudiusResult | null>(null);
  const [claudiusLoading, setClaudiusLoading] = useState(false);
  const [claudiusError, setClaudiusError] = useState<string | null>(null);
  const [claudiusOpen, setClaudiusOpen] = useState(false);

  const handleLoad = async () => {
    if (compare) { setOpen(o => !o); return; }
    setLoading(true);
    setError(null);
    try {
      const result = await fetchCompare({ domain, level, role, caseId });
      setCompare(result);
      setOpen(true);
    } catch {
      setError('Backend niet bereikbaar — vergelijking niet beschikbaar.');
    } finally {
      setLoading(false);
    }
  };

  const handleClaudius = async () => {
    if (claudius) { setClaudiusOpen(o => !o); return; }
    setClaudiusLoading(true);
    setClaudiusError(null);
    try {
      const result = await fetchClaudius({ domain, level, role, caseId, situation: situation ?? '' });
      setClaudius(result);
      setClaudiusOpen(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Onbekende fout';
      setClaudiusError(
        msg.includes('niet beschikbaar') || msg.includes('503')
          ? 'Claudius is niet geconfigureerd op deze server.'
          : 'Claudius kon de toets niet voltooien — probeer opnieuw.'
      );
    } finally {
      setClaudiusLoading(false);
    }
  };

  return (
    <div className="compare-block">
      <div className="compare-actions">
        <button
          className="btn btn-compare"
          onClick={handleLoad}
          disabled={loading}
        >
          {loading ? 'Laden...' : open ? '▲ Verberg vergelijking' : '⬡ Toon AI vs ORFHEUSS vergelijking'}
        </button>
        <button
          className="btn btn-claudius"
          onClick={handleClaudius}
          disabled={claudiusLoading}
          title="Claudius: Claude als live ORFHEUSS-toetser"
        >
          {claudiusLoading ? 'Claudius denkt...' : claudiusOpen ? '▲ Verberg Claudius' : 'Vraag Claudius'}
        </button>
      </div>
      <p className="claudius-disclaimer">
        Claudius is een AI-assistent. Invoer wordt verwerkt via de ORFHEUSS API. Deel geen persoonsgegevens.
      </p>
      {error && <span className="compare-error">{error}</span>}

      {open && compare && (
        <div className="split-view">
          <div className="split-panel split-panel--ai">
            <div className="split-header">
              <span className="split-icon">🤖</span>
              <span className="split-title">Gewone AI</span>
              <span className="split-tag split-tag--ai">optimaliseert voor...</span>
            </div>
            <div className="split-section">
              <div className="split-label">Optimaliseert voor</div>
              <ul className="split-list">
                {compare.plainAiTendencies.optimisesFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="split-section">
              <div className="split-label">Negeert risico&apos;s</div>
              <ul className="split-list split-list--risk">
                {compare.plainAiTendencies.ignoresRisks.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="split-section">
              <div className="split-label">Typisch advies</div>
              <p className="split-advice">{compare.plainAiTendencies.typicalAdvice}</p>
            </div>
          </div>

          <OrfheussPanel
            checks={compare.orfheussChecks}
            title="ORFHEUSS + TaoGate"
            icon="⬡"
          />
        </div>
      )}

      {claudiusOpen && claudius && (
        <div className="claudius-block">
          <div className="claudius-header">
            <span className="claudius-label">Claudius — live ORFHEUSS-toets</span>
            <span className="claudius-badge">Claude + ORFHEUSS-codex</span>
          </div>
          <OrfheussPanel
            checks={claudius.orfheussChecks}
            title="Claudius (ORFHEUSS AI)"
            icon="⬡"
          />
        </div>
      )}
      {claudiusError && <span className="compare-error claudius-error">{claudiusError}</span>}
    </div>
  );
};
