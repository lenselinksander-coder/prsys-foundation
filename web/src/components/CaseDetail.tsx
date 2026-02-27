import React, { useState, useEffect } from 'react';
import type { Case } from '../types';
import { useUser } from '../context/UserContext';
import { useWorkbook } from '../context/WorkbookContext';
import { fetchCompare } from '../services/taogateApi';
import type { CompareResult } from '../services/taogateApi';

interface Props {
  cas: Case;
  onBack?: () => void;
}

export const CaseDetail: React.FC<Props> = ({ cas, onBack }) => {
  const { role, level } = useUser();
  const { getEntry, saveEntry } = useWorkbook();
  const existing = getEntry(cas.id);

  const [observation, setObservation] = useState(existing?.observation ?? '');
  const [aiResponse, setAiResponse] = useState(existing?.aiResponse ?? '');
  const [orfheussResponse, setOrfheussResponse] = useState(existing?.orfheussResponse ?? '');
  const [reflection, setReflection] = useState(existing?.reflection ?? '');
  const [saved, setSaved] = useState(false);

  // ORFHEUSS split-view state
  const [compare, setCompare] = useState<CompareResult | null>(null);
  const [compareLoading, setCompareLoading] = useState(false);
  const [compareError, setCompareError] = useState<string | null>(null);
  const [showCompare, setShowCompare] = useState(false);

  useEffect(() => {
    setCompare(null);
    setCompareError(null);
    setShowCompare(false);
  }, [cas.id]);

  const handleLoadCompare = async () => {
    setCompareLoading(true);
    setCompareError(null);
    try {
      const result = await fetchCompare({
        domain: cas.domain,
        level,
        role,
        caseId: cas.id,
      });
      setCompare(result);
      setShowCompare(true);
    } catch (e) {
      setCompareError(e instanceof Error ? e.message : 'Onbekende fout');
    } finally {
      setCompareLoading(false);
    }
  };

  const handleSave = () => {
    saveEntry({
      caseId: cas.id,
      observation,
      aiResponse,
      orfheussResponse,
      reflection,
      savedAt: new Date().toISOString(),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const isComplete = observation && aiResponse && orfheussResponse && reflection;

  return (
    <div className="case-detail">
      {onBack && (
        <button className="btn btn-ghost back-btn" onClick={onBack}>
          ← Terug naar leergang
        </button>
      )}

      {/* Header */}
      <div className="case-header">
        <div className="case-badges">
          <span className="badge badge-level">{cas.level.toUpperCase()}</span>
          <span className="badge badge-domain">{cas.domain}</span>
        </div>
        <h1 className="case-title">{cas.title}</h1>
      </div>

      {/* Stap 1 — Situatie */}
      <div className="case-step">
        <div className="step-label">
          <span className="step-number">1</span>
          <span className="step-title">De situatie</span>
        </div>
        <div className="case-situation">
          <p>{cas.situation}</p>
        </div>

        <label className="field-label">
          Wat valt jou op? Wat is hier het ethische spanningsveld?
        </label>
        <textarea
          className="case-textarea"
          rows={4}
          placeholder="Schrijf hier je observatie..."
          value={observation}
          onChange={e => setObservation(e.target.value)}
        />
      </div>

      {/* Stap 2 — Vraag aan AI */}
      <div className="case-step">
        <div className="step-label">
          <span className="step-number">2</span>
          <span className="step-title">Vraag aan AI</span>
        </div>
        <div className="case-question case-question--ai">
          <div className="question-tag">Zoals gesteld aan een gewone AI:</div>
          <blockquote className="question-text">{cas.questionToAI}</blockquote>
        </div>

        <label className="field-label">
          Wat zou een AI hier waarschijnlijk antwoorden? Wat ontbreekt in dat antwoord?
        </label>
        <textarea
          className="case-textarea"
          rows={4}
          placeholder="Beschrijf het verwachte AI-antwoord en wat er ontbreekt..."
          value={aiResponse}
          onChange={e => setAiResponse(e.target.value)}
        />
      </div>

      {/* Stap 3 — Vraag aan ORFHEUSS + split-view */}
      <div className="case-step">
        <div className="step-label">
          <span className="step-number">3</span>
          <span className="step-title">Vraag aan ORFHEUSS</span>
        </div>
        <div className="case-question case-question--orfheuss">
          <div className="question-tag">Met de TaoGate-toets:</div>
          <blockquote className="question-text">{cas.questionToOrfheuss}</blockquote>
        </div>

        <div className="framework-chips">
          <span className="framework-label">ORFHEUSS toetst op:</span>
          {cas.orfheussFramework.map(f => (
            <span key={f} className="chip">{f}</span>
          ))}
        </div>

        {/* ORFHEUSS vergelijking ophalen */}
        {!showCompare && (
          <div className="compare-trigger">
            <button
              className="btn btn-compare"
              onClick={handleLoadCompare}
              disabled={compareLoading}
            >
              {compareLoading ? 'Laden...' : '⬡ Toon AI vs ORFHEUSS vergelijking'}
            </button>
            {compareError && (
              <span className="compare-error">
                Backend niet bereikbaar — vergelijking niet beschikbaar.
              </span>
            )}
          </div>
        )}

        {/* Split-view */}
        {showCompare && compare && (
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

        <label className="field-label" style={{ marginTop: '1.25rem' }}>
          Hoe zou ORFHEUSS dit toetsen? Wat is het verschil met het AI-antwoord?
        </label>
        <textarea
          className="case-textarea"
          rows={5}
          placeholder="Beschrijf de ORFHEUSS-toetsing op bovenstaande criteria..."
          value={orfheussResponse}
          onChange={e => setOrfheussResponse(e.target.value)}
        />
      </div>

      {/* Stap 4 — Reflectie */}
      <div className="case-step">
        <div className="step-label">
          <span className="step-number">4</span>
          <span className="step-title">Jouw reflectie</span>
        </div>

        <label className="field-label">
          Wat is jouw conclusie? Wat doe je in deze situatie en waarom?
        </label>
        <textarea
          className="case-textarea"
          rows={5}
          placeholder="Schrijf hier je eigen standpunt en onderbouwing..."
          value={reflection}
          onChange={e => setReflection(e.target.value)}
        />
      </div>

      {/* Opslaan */}
      <div className="case-actions">
        <button
          className={`btn btn-save ${!isComplete ? 'btn-disabled' : ''}`}
          onClick={handleSave}
          disabled={!isComplete}
        >
          {saved ? '✓ Opgeslagen' : 'Opslaan in werkboek'}
        </button>
        {!isComplete && (
          <span className="save-hint">Vul alle vier stappen in om op te slaan.</span>
        )}
      </div>
    </div>
  );
};
