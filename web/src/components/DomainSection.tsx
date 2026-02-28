import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Domain } from '../types';
import { TRACKS } from '../data/tracks';
import { CASES } from '../data/cases';
import { useUser } from '../context/UserContext';

export const DOMAIN_META: Record<Domain, { label: string; icon: string; description: string }> = {
  marketing: {
    label: 'Marketing',
    icon: '📢',
    description: 'Algoritmes, persuasion, dark patterns en merkkeuzes.',
  },
  social: {
    label: 'Social & Communicatie',
    icon: '💬',
    description: 'Polarisatie, desinformatie, crisismanagement en platform-ethiek.',
  },
  digital: {
    label: 'Digitale producten & UX',
    icon: '🖥️',
    description: 'Privacy by design, dark patterns, cookiewalls en A/B-testen.',
  },
  finance: {
    label: 'Finance & Algoritmes',
    icon: '💰',
    description: 'Kredietscoring, dynamic pricing, HFT en algoritmische uitsluiting.',
  },
  zorg: {
    label: 'Zorg & Welzijn',
    icon: '🏥',
    description: 'AI-triage, domotica, GGZ-chatbots en zelfregie.',
  },
  sociaal_domein: {
    label: 'Sociaal Domein',
    icon: '🤝',
    description: 'Participatieplicht, schuldhulp, risicoprofilering en bureaucratie.',
  },
};

export const DomainSection: React.FC<{ domain: Domain }> = ({ domain }) => {
  const { role, level } = useUser();
  const navigate = useNavigate();
  const meta = DOMAIN_META[domain];

  const tracks = TRACKS.filter(
    t => t.domain === domain && t.level === level && t.roles.includes(role)
  );

  if (tracks.length === 0) return null;

  return (
    <section id={domain} className="domain-section">
      <div className="domain-header">
        <span className="domain-icon">{meta.icon}</span>
        <div>
          <h2 className="domain-title">{meta.label}</h2>
          <p className="domain-description">{meta.description}</p>
        </div>
      </div>

      <div className="track-grid">
        {tracks.map(track => {
          const caseCount = CASES.filter(
            c => c.trackId === track.id && c.roles.includes(role)
          ).length;

          return (
            <article key={track.id} className="track-card">
              <div className="track-card-body">
                <h3 className="track-title">{track.title}</h3>
                <p className="track-description">{track.description}</p>
                <div className="track-meta">
                  <span className="badge badge-level">{track.level.toUpperCase()}</span>
                  {caseCount > 0 && (
                    <span className="badge badge-cases">{caseCount} case{caseCount !== 1 ? 's' : ''}</span>
                  )}
                  <span className="badge badge-modules">{track.moduleCount} modules</span>
                  {track.roles.map(r => (
                    <span key={r} className="badge badge-role">{r}</span>
                  ))}
                </div>
              </div>
              <div className="track-card-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/track/${track.id}`)}
                >
                  Bekijk leergang →
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
