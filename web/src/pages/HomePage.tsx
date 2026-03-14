import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoleLevelSelector } from '../components/RoleLevelSelector';
import { DomainSection } from '../components/DomainSection';
import { OrfheussBackground } from '../components/OrfheussBackground';
import { useTheme } from '../context/ThemeContext';
import type { Domain } from '../types';
import { useUser } from '../context/UserContext';
import { TRACKS } from '../data/tracks';

const DOMAINS: Domain[] = [
  'marketing', 'social', 'digital', 'finance', 'zorg', 'sociaal_domein', 'horeca',
];

export const HomePage: React.FC = () => {
  const { role, level } = useUser();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const visibleDomains = DOMAINS.filter(d =>
    TRACKS.some(t => t.domain === d && t.level === level && t.roles.includes(role))
  );

  return (
    <div className="home-page">

      {/* ── 1. ZEN HERO ─────────────────────────────────────────────────── */}
      <section className="hero-zen">

        {/* Ensō */}
        <div className="hero-zen-enso" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 100 22 A 78 78 0 1 1 117 24.8"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Typografie */}
        <div className="hero-zen-text">
          <p className="hero-zen-title">ORFHEUSS</p>
          <div className="hero-zen-rule" />
          <p className="hero-zen-sub">PRSYS · ACADEMY</p>
        </div>

        {/* Daylight / Nocturne grid */}
        <div className="theme-grid" role="group" aria-label="Kies thema">
          <button
            className={`theme-block theme-block--daylight${theme === 'daylight' ? ' theme-block--active' : ''}`}
            onClick={() => setTheme('daylight')}
          >
            <span className="theme-block-symbol">◐</span>
            <span className="theme-block-name">DAYLIGHT</span>
            <span className="theme-block-desc">Wit. Helder. Open.</span>
          </button>
          <button
            className={`theme-block theme-block--nocturne${theme === 'nocturne' ? ' theme-block--active' : ''}`}
            onClick={() => setTheme('nocturne')}
          >
            <span className="theme-block-symbol">◑</span>
            <span className="theme-block-name">NOCTURNE</span>
            <span className="theme-block-desc">Zwart. Stil. Diep.</span>
          </button>
        </div>

        {/* Scroll hint */}
        <a href="#taogate" className="hero-zen-scroll" aria-label="Verder">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

      </section>

      {/* ── 2. TAOGATE ────────────────────────────────────────────────── */}
      <section id="taogate" className="journey-section journey-taogate">
        <div className="journey-inner">
          <div className="journey-symbol">⬡</div>
          <h2 className="journey-title">Loop door de TaoGate</h2>
          <p className="journey-lead">
            Een gate is een bewuste drempel. Niet om te blokkeren, maar om te vragen:
            <em> klopt dit?</em>
          </p>
          <div className="journey-cards">
            <div className="journey-card">
              <div className="journey-card-icon">τ</div>
              <h3>Torsie</h3>
              <p>Hoe hard moet een beslissing worden geforceerd door constraints? Hoe meer weerstand, hoe meer druk.</p>
            </div>
            <div className="journey-card">
              <div className="journey-card-icon">ω</div>
              <h3>Tempo</h3>
              <p>De snelheid van verandering, vergaderingen, onderbrekingen. AI verhoogt ω, structureel en permanent.</p>
            </div>
            <div className="journey-card">
              <div className="journey-card-icon">TI</div>
              <h3>Transfer Integrity</h3>
              <p>Hoe volledig en eerlijk gaat context over van mens naar systeem, van systeem naar beslissing?</p>
            </div>
          </div>
          <div className="journey-formula">
            <span className="formula-label">Overbelasting indicator</span>
            <code className="formula-text">R = τ × ω × (1 / TI)</code>
            <span className="formula-note">Niet burnout. Een systeemconditie.</span>
          </div>
        </div>
      </section>

      {/* ── 3. ONTMOET ORFHEUSS ───────────────────────────────────────── */}
      <section id="orfheuss" className="journey-section journey-orfheuss">
        <OrfheussBackground />
        <div className="journey-inner journey-inner--centered">
          <div className="journey-symbol journey-symbol--light">⬡</div>
          <h2 className="journey-title">Ontmoet Orfheuss</h2>
          <p className="journey-lead">
            In de Griekse mythologie daalt Orfheus de onderwereld in om zijn geliefde terug te halen.
            Hij mocht niet omkijken, en toch keek hij.
          </p>
          <p className="journey-body">
            Dat terugkijken - reflecteren, twijfelen, opnieuw wegen - is zijn wezen.
            ORFHEUSS is de AI die dat doet. Niet snel antwoorden, maar <strong>toetsen</strong>:
            is er mandaat? Is de informatie integer? Is de draagkracht aanwezig?
          </p>
          <div className="orfheuss-compare">
            <div className="orfheuss-col orfheuss-col--plain">
              <div className="orfheuss-col-header">Gewone AI</div>
              <ul>
                <li>Geeft snel antwoord</li>
                <li>Optimaliseert voor output</li>
                <li>Volgt het patroon</li>
                <li>Negeert context</li>
              </ul>
            </div>
            <div className="orfheuss-divider">vs</div>
            <div className="orfheuss-col orfheuss-col--orfheuss">
              <div className="orfheuss-col-header">ORFHEUSS</div>
              <ul>
                <li>Stelt eerst een vraag</li>
                <li>Toetst op mandaat &amp; integriteit</li>
                <li>Herkent uitzonderingen</li>
                <li>Bewaart de menselijke gate</li>
              </ul>
            </div>
          </div>
          <blockquote className="journey-quote">
            "Als één van de drie vragen niet klopt - mandaat, integriteit, draagkracht -
            stopt ORFHEUSS. Geen actie. Terug naar de mens."
          </blockquote>
        </div>
      </section>

      {/* ── 4. CLAUDIUS-KADER ─────────────────────────────────────────── */}
      <section id="claudius" className="journey-section journey-claudius">
        <div className="journey-inner">
          <div className="journey-symbol">⬡</div>
          <h2 className="journey-title">Claudius - wat doet het, wat niet</h2>
          <p className="journey-lead">
            Claudius is de AI binnen ORFHEUSS. Geen beslisser, maar een toetser.
            Begrijp de grens voordat je ermee werkt.
          </p>
          <div className="claudius-home-block">
            <div className="claudius-col claudius-col--doet">
              <div className="claudius-col-header">Doet</div>
              <ul>
                <li>Toetst op mandaat, integriteit en draagkracht</li>
                <li>Stelt ethische vragen bij twijfelgevallen</li>
                <li>Herkent wanneer een beslissing te snel gaat</li>
                <li>Geeft terug aan de mens als het niet klopt</li>
              </ul>
            </div>
            <div className="claudius-col claudius-col--doetniet">
              <div className="claudius-col-header">Doet niet</div>
              <ul>
                <li>Neemt besluiten namens jou of een cliënt</li>
                <li>Vervangt professioneel of juridisch oordeel</li>
                <li>Optimaliseert output boven ethiek</li>
                <li>Geeft een definitief advies</li>
              </ul>
            </div>
            <div className="claudius-col claudius-col--wanneer">
              <div className="claudius-col-header">Wanneer inzetten</div>
              <ul>
                <li>Bij cliëntcasussen met conflicterende belangen</li>
                <li>Bij AI-ondersteunde adviezen die anderen raken</li>
                <li>Bij budgetbesluiten met ethische implicaties</li>
                <li>Bij crisis- of tijdsdruk-situaties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. INSTAP ─────────────────────────────────────────────────── */}
      <section id="instap" className="journey-section journey-enter">
        <div className="journey-inner journey-inner--centered">
          <h2 className="journey-title">Kies jouw route</h2>
          <p className="journey-lead">
            Selecteer je rol en niveau. De leergangen en werkboeken passen zich aan.
          </p>
          <RoleLevelSelector />
          <div className="journey-enter-actions">
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/werkboeken')}>
              Open werkboeken →
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => {
              document.getElementById('domeinen')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Bekijk leergangen ↓
            </button>
          </div>
        </div>
      </section>

      {/* ── 5. DOMEINEN ───────────────────────────────────────────────── */}
      <div id="domeinen" className="domains-container">
        {visibleDomains.length > 0 && (
          <div className="domain-nav">
            {visibleDomains.map(d => (
              <a key={d} href={`#${d}`} className="domain-nav-link">
                {d.replace('_', ' ')}
              </a>
            ))}
          </div>
        )}
        {visibleDomains.length === 0 ? (
          <div className="empty-state">
            <p>Geen leergangen beschikbaar voor deze combinatie.</p>
          </div>
        ) : (
          visibleDomains.map(d => <DomainSection key={d} domain={d} />)
        )}
      </div>

    </div>
  );
};
