import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from './context/UserContext';
import { useTheme } from './context/ThemeContext';
import { WORKBOOKS } from './data/workbooks';
import { LESSONS, CASE_LESSONS } from './data/lessons';
import { DOMAIN_META } from './components/DomainSection';
import { UserProvider } from './context/UserContext';
import { WorkbookProvider } from './context/WorkbookContext';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { TrackPage } from './pages/TrackPage';
import { WorkbookPage } from './pages/WorkbookPage';
import { WorkbookViewPage } from './pages/WorkbookViewPage';
import { ThemeToggle } from './components/ThemeToggle';
import './index.css';

const NavBar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-brand-text">PRSYS</span>
      </Link>
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link--active' : ''}`}>
          Leergangen
        </Link>
        <Link to="/werkboeken" className={`nav-link ${isActive('/werkboeken') ? 'nav-link--active' : ''}`}>
          Werkboeken
        </Link>
        <Link to="/werkboek" className={`nav-link ${isActive('/werkboek') && !isActive('/werkboeken') ? 'nav-link--active' : ''}`}>
          Mijn voortgang
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
      <UserProvider>
        <WorkbookProvider>
          <RoleThemeBridge />
          <div className="app">
            <NavBar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/track/:trackId" element={<TrackPage />} />
                <Route path="/werkboek" element={<WorkbookPage />} />
                <Route path="/werkboeken" element={<WorkbookenOverzicht />} />
                <Route path="/werkboek/:workbookId" element={<WorkbookViewPage />} />
              </Routes>
            </main>
            <footer className="footer">
              <p>ORFHEUSS Academy — TaoGate lesprogramma</p>
            </footer>
          </div>
        </WorkbookProvider>
      </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

// ── Role→Theme bridge ─────────────────────────────────────────────────────
const RoleThemeBridge: React.FC = () => {
  const { role } = useUser();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(role === 'docent' ? 'nocturne' : 'daylight');
  }, [role]);

  return null;
};

// ── Werkboeken-overzicht (inline, simpel) ─────────────────────────────────
const WorkbookenOverzicht: React.FC = () => {
  const { role, level } = useUser();
  const navigate = useNavigate();

  const visible = WORKBOOKS.filter(
    w => w.level === level && w.roles.includes(role)
  );

  return (
    <div className="page-container">
      <div className="track-page-header">
        <h1 className="track-page-title">Werkboeken</h1>
        <p className="track-page-description">
          Volledige werkboeken met cases, ethische reflecties en invulruimte.
          Gefilterd op jouw niveau en rol.
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="empty-state">
          <p>Geen werkboeken beschikbaar voor jouw huidige rol en niveau.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-faint)' }}>
            Pas je rol of niveau aan via de Leergangen-pagina.
          </p>
        </div>
      ) : (
        <div className="track-grid">
          {visible.map(wb => {
            const cases = CASE_LESSONS.filter(l => l.workbookId === wb.id);
            const intros = LESSONS.filter(l => l.workbookId === wb.id);
            const domainMeta = DOMAIN_META[wb.domain];

            return (
              <article key={wb.id} className="track-card">
                <div className="track-card-body">
                  <div className="track-meta" style={{ marginBottom: '0.75rem' }}>
                    <span className="badge badge-level">{wb.level.toUpperCase()}</span>
                    <span className="badge badge-domain">{domainMeta?.icon} {domainMeta?.label ?? wb.domain}</span>
                  </div>
                  <h3 className="track-title">{wb.title}</h3>
                  <div className="track-meta" style={{ marginTop: '0.75rem' }}>
                    <span className="badge badge-cases">{cases.length} cases</span>
                    <span className="badge badge-modules">{intros.length + cases.length} onderdelen</span>
                  </div>
                </div>
                <div className="track-card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/werkboek/${wb.id}`)}
                  >
                    Open werkboek →
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

export default App;
