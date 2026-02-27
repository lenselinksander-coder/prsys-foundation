import React, { useState } from 'react';
import type { Case } from '../types';
import { useWorkbook } from '../context/WorkbookContext';

interface Props {
  cas: Case;
  onBack?: () => void;
}

export const CaseDetail: React.FC<Props> = ({ cas, onBack }) => {
  const { getEntry, saveEntry } = useWorkbook();
  const existing = getEntry(cas.id);

  const [observation, setObservation] = useState(existing?.observation ?? '');
  const [aiResponse, setAiResponse] = useState(existing?.aiResponse ?? '');
  const [orfheussResponse, setOrfheussResponse] = useState(existing?.orfheussResponse ?? '');
  const [reflection, setReflection] = useState(existing?.reflection ?? '');
  const [saved, setSaved] = useState(false);

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

      {/* Stap 3 — Vraag aan ORFHEUSS */}
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

        <label className="field-label">
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
