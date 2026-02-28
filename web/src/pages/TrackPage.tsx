import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TRACKS } from '../data/tracks';
import { CASES } from '../data/cases';
import { CaseDetail } from '../components/CaseDetail';
import { useUser } from '../context/UserContext';
import { useWorkbook } from '../context/WorkbookContext';

function CopyButton({ text, label = 'Kopieer' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button className="btn btn-ghost btn-xs" onClick={handleCopy}>
      {copied ? '✓ Gekopieerd' : label}
    </button>
  );
}

function ReplitPromptBox({ prompt, systemPrompt }: { prompt: string; systemPrompt?: string }) {
  return (
    <div className="replit-prompt-box">
      <div className="replit-prompt-label">Replit-openingsprompt</div>
      <div className="replit-prompt-content">
        <code className="replit-prompt-text">{prompt}</code>
        <CopyButton text={prompt} />
      </div>
      {systemPrompt && (
        <details className="replit-systemprompt-details">
          <summary className="replit-systemprompt-summary">Volledig systeem-prompt</summary>
          <div className="replit-systemprompt-body">
            <pre className="replit-systemprompt-text">{systemPrompt}</pre>
            <div className="replit-systemprompt-footer">
              <CopyButton text={systemPrompt} label="Kopieer systeem-prompt" />
            </div>
          </div>
        </details>
      )}
    </div>
  );
}

export const TrackPage: React.FC = () => {
  const { trackId } = useParams<{ trackId: string }>();
  const navigate = useNavigate();
  const { role } = useUser();
  const { getEntry } = useWorkbook();
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  const track = TRACKS.find(t => t.id === trackId);

  if (!track) {
    return (
      <div className="error-page">
        <p>Leergang niet gevonden.</p>
        <button className="btn btn-ghost" onClick={() => navigate('/')}>
          ← Terug naar home
        </button>
      </div>
    );
  }

  const cases = CASES.filter(c => c.trackId === trackId && c.roles.includes(role));

  if (selectedCaseId) {
    const cas = cases.find(c => c.id === selectedCaseId);
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
      <button className="btn btn-ghost back-btn" onClick={() => navigate('/')}>
        ← Terug naar overzicht
      </button>

      <div className="track-page-header">
        <span className="badge badge-level">{track.level.toUpperCase()}</span>
        <span className="badge badge-domain">{track.domain}</span>
        <h1 className="track-page-title">{track.title}</h1>
        <p className="track-page-description">{track.description}</p>
        <div className="track-page-meta">
          <span>{track.moduleCount} modules</span>
          <span>{cases.length} ORFHEUSS-cases</span>
        </div>
        {track.replitPrompt && (
          <ReplitPromptBox prompt={track.replitPrompt} systemPrompt={track.replitSystemPrompt} />
        )}
      </div>

      {cases.length > 0 ? (
        <div className="case-list">
          <h2 className="section-title">ORFHEUSS-cases</h2>
          {cases.map((cas, index) => {
            const entry = getEntry(cas.id);
            const isCompleted = !!(entry?.reflection);

            return (
              <article key={cas.id} className={`case-card ${isCompleted ? 'case-card--done' : ''}`}>
                <div className="case-card-body">
                  <div className="case-card-top">
                    <span className="case-number">Case {index + 1}</span>
                    {isCompleted && <span className="badge badge-done">✓ Ingevuld</span>}
                  </div>
                  <h3 className="case-card-title">{cas.title}</h3>
                  <p className="case-card-situation">{cas.situation}</p>
                  <div className="case-card-chips">
                    {cas.orfheussFramework.slice(0, 3).map(f => (
                      <span key={f} className="chip chip-sm">{f}</span>
                    ))}
                    {cas.orfheussFramework.length > 3 && (
                      <span className="chip chip-sm chip-more">+{cas.orfheussFramework.length - 3}</span>
                    )}
                  </div>
                </div>
                <div className="case-card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedCaseId(cas.id)}
                  >
                    {isCompleted ? 'Bekijk / bewerk' : 'Aan de slag →'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <p>Nog geen cases beschikbaar voor deze leergang en jouw rol.</p>
        </div>
      )}
    </div>
  );
};
