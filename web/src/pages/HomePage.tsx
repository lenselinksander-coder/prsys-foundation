import React from 'react';
import { RoleLevelSelector } from '../components/RoleLevelSelector';
import { DomainSection } from '../components/DomainSection';
import type { Domain } from '../types';
import { useUser } from '../context/UserContext';
import { TRACKS } from '../data/tracks';

const DOMAINS: Domain[] = [
  'marketing',
  'social',
  'digital',
  'finance',
  'zorg',
  'sociaal_domein',
];

export const HomePage: React.FC = () => {
  const { role, level } = useUser();
  const visibleDomains = DOMAINS.filter(d =>
    TRACKS.some(t => t.domain === d && t.level === level && t.roles.includes(role))
  );

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">ORFHEUSS Academy</h1>
          <p className="hero-subtitle">
            Leer werken met AI — en leer wanneer je zelf de gate bewaakt.
          </p>
          <RoleLevelSelector />
        </div>
      </section>

      {visibleDomains.length === 0 ? (
        <div className="empty-state">
          <p>Geen leergangen beschikbaar voor deze combinatie van rol en niveau.</p>
        </div>
      ) : (
        <div className="domains-container">
          <div className="domain-nav">
            {visibleDomains.map(d => (
              <a key={d} href={`#${d}`} className="domain-nav-link">
                {d.replace('_', ' ')}
              </a>
            ))}
          </div>
          {visibleDomains.map(d => (
            <DomainSection key={d} domain={d} />
          ))}
        </div>
      )}
    </div>
  );
};
