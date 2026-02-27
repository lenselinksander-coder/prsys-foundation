import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { WorkbookProvider } from './context/WorkbookContext';
import { HomePage } from './pages/HomePage';
import { TrackPage } from './pages/TrackPage';
import { WorkbookPage } from './pages/WorkbookPage';
import './index.css';

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">⬡</span>
        ORFHEUSS Academy
      </Link>
      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'nav-link--active' : ''}`}
        >
          Leergangen
        </Link>
        <Link
          to="/werkboek"
          className={`nav-link ${location.pathname === '/werkboek' ? 'nav-link--active' : ''}`}
        >
          Mijn Werkboek
        </Link>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <WorkbookProvider>
          <div className="app">
            <NavBar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/track/:trackId" element={<TrackPage />} />
                <Route path="/werkboek" element={<WorkbookPage />} />
              </Routes>
            </main>
            <footer className="footer">
              <p>ORFHEUSS Academy — TaoGate lesprogramma</p>
            </footer>
          </div>
        </WorkbookProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
