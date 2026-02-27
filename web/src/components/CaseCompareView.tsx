import React, { useState } from 'react';
import type { Domain, Level, Role } from '../types';
import { fetchCompare } from '../services/taogateApi';
import type { CompareResult } from '../services/taogateApi';

interface Props {
  caseId: string;
  domain: Domain;
  level: Level;
  role: Role;
}

export const CaseCompareView: React.FC<Props> = ({ caseId, domain, level, role }) => {
  const [compare, setCompare] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

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

  return (
    <div className="compare-block">
      <button
        className="btn btn-compare"
        onClick={handleLoad}
        disabled={loading}
      >
        {loading ? 'Laden...' : open ? '▲ Verberg vergelijking' : '⬡ Toon AI vs ORFHEUSS vergelijking'}
      </button>
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

          <div className="split-panel split-panel--orfheuss">
            <div className="split-header">
              <span className="split-icon">⬡</span>
              <span className="split-title">ORFHEUSS + TaoGate</span>
              <span className={`split-tag ${compare.orfheussChecks.wouldBlock ? 'split-tag--block' : 'split-tag--pass'}`}>
                {compare.orfheussChecks.wouldBlock ? 'blokkeert / vertraagt' : 'laat door met vragen'}
              </span>
            </div>
            <div className="split-section">
              <div className="split-label">Verplichte checks</div>
              <ul className="split-list split-list--checks">
                {compare.orfheussChecks.requiredChecks.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {compare.orfheussChecks.wouldBlock && (
              <div className="split-section">
                <div className="split-label">Reden blokkade</div>
                <p className="split-block-reason">{compare.orfheussChecks.reasonIfBlock}</p>
              </div>
            )}
            {compare.orfheussChecks.additionalQuestions.length > 0 && (
              <div className="split-section">
                <div className="split-label">Reflectievragen</div>
                <ol className="split-questions">
                  {compare.orfheussChecks.additionalQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
